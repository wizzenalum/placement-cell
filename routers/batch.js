const express = require("express");
const router = express.Router();

const batchController = require("../controllers/batch");

// these are main three pages that will mostly user will use.
router.get("/id/:id", batchController.batch);
router.post("/create", batchController.createBatch);

module.exports = router;
