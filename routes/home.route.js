const router = require("express").Router();
const { getAllUserGetController } = require("../controllers/home.controller");

router.get("/", getAllUserGetController);

module.exports = router;
