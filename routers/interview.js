const express = require("express");
const router = express.Router();

const interviewController = require("../controllers/interview");

// create read functionality of  inteview data base.
router.post("/create", interviewController.createInterview);
router.get("/assign-student/", interviewController.updateInterview);
router.get("/:id", interviewController.interview);

// we can also create routes to delete, update the interview info

module.exports = router;
