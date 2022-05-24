const User = require("../models/User.model");

exports.getAllUserGetController = async (req, res, next) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		next(err);
	}
};

