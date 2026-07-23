import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { uploadResume } from "../services/resumeService";

const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setError("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please select a PDF resume.");
      return;
    }

    try {
      setLoading(true);

      const response = await uploadResume(selectedFile);

      alert(response.message);

      setSelectedFile(null);
      setError("");
    } catch (err) {
      setError(err.message || "Failed to upload resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card title="Upload Resume">
        <p className="text-gray-600 mb-6">
          Upload your resume in PDF format to receive an AI-powered analysis.
        </p>

        <form onSubmit={handleUpload} className="space-y-6">
          <div>
            <label
              htmlFor="resume"
              className="block mb-2 font-medium text-gray-700"
            >
              Choose Resume (PDF)
            </label>

            <input
              id="resume"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="block w-full border border-gray-300 rounded-lg p-2
              file:mr-4 file:px-4 file:py-2
              file:border-0 file:rounded-md
              file:bg-blue-600 file:text-white
              file:cursor-pointer hover:file:bg-blue-700"
            />
          </div>

          {selectedFile && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <p>
                <span className="font-semibold">Selected File:</span>{" "}
                {selectedFile.name}
              </p>

              <p>
                <span className="font-semibold">Size:</span>{" "}
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
          )}

          {error && (
            <p className="text-red-600 font-medium">{error}</p>
          )}

          <Button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Upload Resume"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ResumeUpload;