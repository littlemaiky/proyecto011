const express1 = require('express');
const router1 = express1.Router();
const ventaService = require('../services/venta.service');
const service1 = new ventaService();

router1.get('/', (req, res) => {
  const ventas = service1.find();
  res.status(200).json(ventas);
});

//****************VENTAS*************************

router1.get('/:id', (req, res) => {
  const { id } = req.params;
  const venta = service1.findOne(id);
  if (venta === undefined) {
    res.status(404).json({
      message: 'No hay ventas'
    });
  }
  res.status(200).json(venta);
});

//ROUTER ENFOCADOS
//AGREGAR
// router1.post('/', (req,res) =>{
//   const body = req.body;
//   const nuevaVenta = service1.create(body);
//   res.status(201).json({
//     message: 'Venta creada',
//     nuevaVenta
//   });
// });

// //ACTUALIZAR - EDITAR
// router1.patch('/:id', (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   const ventaAc = service1.update(id, body);
//   res.status(200).json({
//     message: 'Venta actualizada',
//     ventaAc
//   });
// });

// //ELIMINAR
// router1.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   const ventaEli = service1.delete(id);
//   res.json({
//     message: 'Venta eliminada',
//     ventaEli
//   });
// });

module.exports = router1;
