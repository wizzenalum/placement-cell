const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student");

// here routing to crud functionality of the student data structure
router.post("/create", studentController.create);
router.post("/update/:id", studentController.update);
router.get("/delete/:id", studentController.delete);  // not active TODO

// we can also create routes to delete, update the company info

module.exports = router;
