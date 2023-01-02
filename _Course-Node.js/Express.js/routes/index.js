const productsRouter = require("./productsRouter");
const categoriesRouter = require("./categoriesRouter");
const usersRouter = require("./usersRouter");

function routerAPi(app, env) {
  app.use(`${env}/products`, productsRouter);
  app.use(`${env}/categories`, categoriesRouter);
  app.use(`${env}/users`, usersRouter);
}

module.exports = routerAPi;
