const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

const { logError, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

app.use(express.json()); //perminte al Nodejs interpretar el contenido en formato JSON

app.get('/', (req, res) => {
  res.send("Restaurante");
});

routerApi(app); //aca esta todo lo que se dentro del router y service
//estos son los siguientes middleware
app.use(logError);//imprime el error en consola
app.use(boomErrorHandler);//si es un error de tipo boom lo detiene y muestra el RESPONS
app.use(errorHandler);//muestra la salida en formato JSON

app.listen(port, () => {
  console.log("express activo: " + port);
});



























// //**************************************************
// //************EJEMPLOS DE CLASE*********************
// //**************************************************

// app.get('/productos', (req, res) => {
//   res.json([
//     {
//       id: '001',
//       nombre: 'producto 01',
//       precio: 15.50
//     },
//     {
//       id: '002',
//       nombre: 'producto 02',
//       precio: 25.50
//     },
//     {
//       id: '003',
//       nombre: 'producto 03',
//       precio: 30
//     },
//     {
//       id: '004',
//       nombre: 'producto 04',
//       precio: 35
//     },
//   ]);
// });

// //**************************************************
// //****************PRODUCTOS*************************
// //**************************************************

// app.get('/productos/filter', (req, res) => {
//   res.json({
//     mensage: 'productofilter',
//   });
// });

// app.get('/productos/:id', (req, res) => {
//   const { id } = req.params;
//   res.json({
//     mensage: 'PRODUCTO',
//     id
//   });
// });

// //**************************************************
// //**************************************************

// app.get('/categoria/:catId/productos/:prodId', (req, res) => {
//   const { catId, prodId } = req.params;
//   res.json({
//     catId,
//     prodId
//   });
// });

// app.get('/usuario', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   } else {
//     res.json({
//       message: 'No estan los 2 query params'
//     });
//   }
// });
