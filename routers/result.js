const express = require("express");
const router = express.Router();

const resultController = require("../controllers/result");

// update functionality of  inteview data base.
router.post("/update/:id", resultController.updateResult);

// we can also create routes to delete, update the interview info

module.exports = router;
