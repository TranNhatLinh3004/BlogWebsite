const router = require("express").Router();
const {
    handleRegister,
    handleLogin,
} = require("../controllers/index.controller");

// register;
router.post("/register", handleRegister);

//login
router.post("/login", handleLogin);

module.exports = router;