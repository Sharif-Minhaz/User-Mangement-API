const router = require("express").Router();
const {
	addUserPostController,
	updateUserPutController,
	deleteUserDeleteController,
	showSingleUserGetController,
} = require("../controllers/user.controller");

router.get("/:id", showSingleUserGetController);

router.post("/add", addUserPostController);

router.put("/update/:id", updateUserPutController);

router.delete("/delete/:id", deleteUserDeleteController);

module.exports = router;
