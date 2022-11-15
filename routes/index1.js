const express = require('express');
// const productsRouter = require('./producto.router');
// //ROUTERS
const ventasRouter = require('./venta.router');
// const paquetesRouter = require('./paquetes/paquete.router');
// const guiasRouter = require('./guias/guia.router');
// const encargadosRouter = require('./encargado/encargado.router');
// const clientesRouter = require('./cliente/cliente.router');

function routerApi1(app) {
  //producto clase
  const routerV2 = express.Router();
  app.use('/api1/v2', routerV2);
  routerV2.use('/venta',ventasRouter);

}


module.exports = routerApi1;
