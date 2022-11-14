const express = require('express');
const productsRouter = require('./producto.router');

function routerApi(app) {
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);
  routerV1.use('/producto',productsRouter);
}

module.exports = routerApi;
