const express = require("express");
const {
    getCareerAdvice,
    getJobMatch
} = require("../controllers/aiController");

const router = express.Router();

// Career Advice
router.post("/career-advice", getCareerAdvice);

// Job Match
router.post("/job-match", getJobMatch);

module.exports = router;