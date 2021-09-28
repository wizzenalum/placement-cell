const express = require("express");
const router = express.Router();
const passport  = require("../configs/passport");

const employeeController = require("../controllers/employee");

router.get("/signup", employeeController.signup);
router.post("/create-user", employeeController.createUser);
router.get("/signin", employeeController.signin);
router.post("/create-session", passport.authenticate("local"),employeeController.createSession);
router.get("/signout", employeeController.signout);

module.exports = router;