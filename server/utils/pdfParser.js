import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import axios from "axios";

export const extractTextFromPDF = async (pdfUrl) => {
  const response = await axios.get(pdfUrl, {
    responseType: "arraybuffer",
  });

  const pdf = await pdfjsLib.getDocument({
    data: new Uint8Array(response.data),
  }).promise;

  let text = "";

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);

    const content = await page.getTextContent();

    text += content.items.map((item) => item.str).join(" ") + "\n";
  }

  return text;
};