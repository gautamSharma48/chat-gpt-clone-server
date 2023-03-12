const router = require("express").Router();
const { searchQuestion } = require("../controller");

router.post("/", searchQuestion);

module.exports = router;
