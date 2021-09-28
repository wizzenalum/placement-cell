const express = require("express");
const router = express.Router();

const csvController = require("../controllers/csv");

// function hello(req, res, next) {
//   console.log("reach here");
//   next();
// }

// these are main three pages that will mostly user will use.
router.get("/all-students", csvController.allStudent);
router.get("/interview/:id", csvController.interview);
router.get("/batch/:id", csvController.batch);

module.exports = router;
