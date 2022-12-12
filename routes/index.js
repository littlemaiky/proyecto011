const express = require('express');
const productsRouter = require('./product.router');
const clientesRouter = require('./clientes.router');
const insumosRouter = require ('./insumos.router');
const trabajadoresRouter = require('./trabajadores.router');
const ventasRouter = require('./ventas.router');
// PAQUETES
const paqueteriasRouter = require('./paqueterias.router');
const tipopaqueteRouter = require('./tipopaquete.router');


function routerApi(app) {

  // PRODUCTOS
  const routerv1 = express.Router();
  app.use('/api/v1', routerv1);
  routerv1.use('/products', productsRouter);

  // VENTAS
  const routerv2 = express.Router();
  app.use('/api/v2', routerv2);
  routerv2.use('/clientes', clientesRouter);

  // INSUMOS
  const routerv3 = express.Router();
  app.use('/api/v3', routerv3);
  routerv3.use('/insumos', insumosRouter);

  // TRABAJADORES
  const routerv4 = express.Router();
  app.use('/api/v4', routerv4);
  routerv4.use('/trabajadores', trabajadoresRouter);

  // VENTAS
  const routerv5 = express.Router();
  app.use('/api/v5', routerv5);
  routerv5.use('/ventas', ventasRouter);

  // PAQUETES
  const routerv6 = express.Router();
  app.use('/api/v6', routerv6);
  routerv6.use('/paquetes', paqueteriasRouter);
  routerv6.use('/tipopaquete', tipopaqueteRouter);
}

module.exports = routerApi;
