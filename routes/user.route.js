const router = require("express").Router();
const {
	addUserPostController,
	deleteUserGetController,
	updateUserPostController,
	showSingleUserGetController,
} = require("../controllers/user.controller");

router.get("/:id", showSingleUserGetController);

router.post("/add", addUserPostController);

router.post("/update/:id", updateUserPostController);

router.get("/delete/:id", deleteUserGetController);

module.exports = router;
