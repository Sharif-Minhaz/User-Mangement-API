const router = require("express").Router();
const {
	addUserPostController,
	deleteUserGetController,
	updateUserPostController,
} = require("../controllers/user.controller");

router.post("/add", addUserPostController);

router.post("/update/:id", updateUserPostController);

router.get("/delete/:id", deleteUserGetController);

module.exports = router;
