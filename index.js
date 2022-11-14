const express = require('express');
const routerApi = require('./routes')
const app = express();
const port = 3000;

//MIDERWERE
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola desde express y hola mundo');
});

routerApi(app);

app.listen(port, () => {
  console.log('Express server activo: ' + port);
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
