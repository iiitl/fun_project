const { register } = require("../controllers/user.controller");
const userMiddleware = require("../middleware/user.middleware");

const router = require("express").Router();

router.post("/", userMiddleware); 
router.post("/register", register);

module.exports = router;
