const router = require("express").Router();
const heathcheck = require("../controllers/heathcheck.controller");

router.get("/", heathcheck.heathcheck);


module.exports = router;