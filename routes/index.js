const express = require('express');
const productsRouter = require('./producto.router');
// //ROUTERS
// const ventasRouter = require('./venta.router');
// const paquetesRouter = require('./paquetes/paquete.router');
// const guiasRouter = require('./guias/guia.router');
// const encargadosRouter = require('./encargado/encargado.router');
// const clientesRouter = require('./cliente/cliente.router');

function routerApi(app) {
  //producto clase
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);
  routerV1.use('/producto',productsRouter);

  // //TRABAJO
  // ventas
  // const routerV2 = express.Router();
  // app.use('/api/v2', routerV2);
  // routerV2.use('/venta',ventasRouter);

  // //Paquetes
  // const routerV3 = express.Router();
  // app.use('/api/v3', routerV3);
  // routerV3.use('/paquete',paquetesRouter);

  // //Guias
  // const routerV4 = express.Router();
  // app.use('/api/v4', routerV4);
  // routerV4.use('/guia',guiasRouter);

  // //Encargado
  // const routerV5 = express.Router();
  // app.use('/api/v5', routerV5);
  // routerV5.use('/encargado',encargadosRouter);

  // //Cliente
  // const routerV6 = express.Router();
  // app.use('/api/v6', routerV6);
  // routerV6.use('/cliente',clientesRouter);
}

// function routerApi1(app1) {
//   const routerV2 = express.Router();
//   app1.use('/api/v2', routerV2);
//   routerV2.use('/venta',ventasRouter);
// }

module.exports = routerApi;
// module.exports = routerApi1;
