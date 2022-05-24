const User = require("../models/User.model");

exports.addUserPostController = async (req, res, next) => {
	const { username, email } = req.body;
	try {
		const user = new User({
			username,
			email,
		});
		await user.save();
		res.redirect("/");
	} catch (err) {
		next(err);
	}
};

exports.deleteUserGetController = async (req, res, next) => {
	const { id } = req.params;

	try {
		await User.findByIdAndDelete(id);
		res.redirect("/");
	} catch (err) {
		next(err);
	}
};

exports.updateUserPostController = async (req, res, next) => {
	const { id } = req.params;
	const { username, email } = req.body;

	try {
		await User.findOneAndUpdate({ _id: id }, { $set: { username, email } }, { new: true });
		res.redirect("/");
	} catch (err) {
		next(err);
	}
};
