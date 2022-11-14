const express = require('express');
const router = express.Router();
const productoservice = require('./../services/producto.service');
const service = new productoservice();

router.get('/', (req, res) => {
  const productos = service.find();
  res.status(200).json(productos);
});

//****************PRODUCTOS*************************

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const producto = service.findOne(id);
  if (producto === undefined) {
    res.status(404).json({
      message: 'producto no encontrado'
    });
  }
  res.status(200).json(producto);
});

//ROUTER ENFOCADOS
//AGREGAR
router.post('/', (req,res) =>{
  const body = req.body;
  const nuevoProducto = service.create(body);
  res.status(201).json({
    message: 'creado',
    nuevoProducto
  });
});

//ACTUALIZAR - EDITAR
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const producto = service.update(id, body);
  res.status(200).json({
    message: 'actualizado',
    producto
  });
});

//ELIMINAR
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json({
    message: 'eliminado',
    rta
  });
});

module.exports = router;
