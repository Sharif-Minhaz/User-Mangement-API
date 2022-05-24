const homeRoute = require("./home.route");
const userRoute = require("./user.route");

const routes = [
	{
		path: "/",
		handler: homeRoute,
	},
	{
		path: "/user",
		handler: userRoute,
	},
];

module.exports = (app) => {
	routes.forEach((r) => {
		r.path === "/" ? app.get(r.path, r.handler) : app.use(r.path, r.handler);
	});
};
