const express = require("express");
const { getCareerAdvice } = require("../controllers/aiController");

const router = express.Router();

// POST /api/ai/career-advice
router.post("/career-advice", getCareerAdvice);

module.exports = router;