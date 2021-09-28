const express = require("express");
const router = express.Router();

const companyController = require("../controllers/company");

// these are main three pages that will mostly user will use.
router.get("/id/:id", companyController.company);  // not active TODO
router.post("/create", companyController.createCompany);

// we can also create routes to delete, update the company info

module.exports = router;
