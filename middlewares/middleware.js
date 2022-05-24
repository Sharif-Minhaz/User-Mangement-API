const express = require("express");
const cors = require("cors");

const middlewares = [
	express.static("public"),
	cors(),
	express.json(),
	express.urlencoded({ extended: true }),
];

module.exports = (app) => {
	middlewares.forEach((m) => {
		app.use(m);
	});
};
