// this is entry point for my all the routes and using the inbuild Router for routing
const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home");

// these are main three pages that will mostly user will use.
router.get("/", homeController.studentList);
router.get("/interviews", homeController.interviewList);
router.get("/current-job", homeController.currentJobs);

// setting the path for the routes specific to individual model to add
// functionality of crud to most.
router.use("/batch", require("./batch"));
router.use("/company", require("./company"));
router.use("/csv", require("./csv"));
router.use("/employee", require("./employee"));
router.use("/interview", require("./interview"));
router.use("/result", require("./result"));
router.use("/student", require("./student"));

// // this will handle the get request that will not found in the system
// // thats why this is at the end
// router.get("/:id", homeController.error404);

module.exports = router;
