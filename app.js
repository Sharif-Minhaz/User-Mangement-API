const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const setMiddlewares = require("./middlewares/middleware");
const setRoutes = require("./routes/route");

setMiddlewares(app);
setRoutes(app);

app.use((req, res, next) => {
	let error = new Error();
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	if (error.status === 404) {
		res.json({
			error: "Url not found, failed to fetch data.",
		});
	} else {
		res.json({
			error: "Internal server error",
			message: error,
		});
	}
});

const { PORT, MONGODB_URI } = process.env;
const port = PORT || 8080;

mongoose
	.connect(MONGODB_URI)
	.then(() => {
		app.listen(port, () => {
			console.info(`Server is running at, http://localhost:${port}`);
		});
	})
	.catch((err) => console.error(err));
