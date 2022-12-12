const express = require('express');
const router = express.Router();
const validatorHandler = require('./../middlewares/validator.handler');
const { createTipoPaqueteSchema, updateTipoPaqueteSchema, getTipoPaqueteSchema } = require('./../schemas/tipopaquete.schema');
const TipoPaqueteService = require ('./../services/tipopaquete.service');
const service = new TipoPaqueteService();

router.get('/', async (req, res) => {
  const tipopaquete = await service.find();
  res.status(200).json(tipopaquete);
});

router.get('/:id',
          validatorHandler(getTipoPaqueteSchema, 'params'),//validamos el ID
          async (req, res, next) => {
  try{ // si yo lanzo el desde el findOne
    const { id } = req.params;
    const tipopaquete = await service.findOne(id);//lanzador de error
    res.status(200).json(tipopaquete);
  }catch(error){ //aca atrapa el error desde find One
    next(error);//envia el error al siguiente middleware
  }
});

router.post('/',
            validatorHandler(createTipoPaqueteSchema, 'body'),//validamos que los datos que vamos a ingresar esten bien
            async (req, res) => {
  const body = req.body;
  const nuevoTipopaqueteria = await service.create(body);
  res.status(201).json({
    message: 'creado',
    nuevoTipopaqueteria
  });
});

router.patch('/:id',
            validatorHandler(getTipoPaqueteSchema, 'params'),//validamos primero el id
            validatorHandler(updateTipoPaqueteSchema, 'body'),//validamos que los datos que vamos a ingresar esten bien
            async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const tipopaquete = await service.update(id, body);
    res.status(200).json({
      message: 'actualizado',
      tipopaquete
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
              validatorHandler(getTipoPaqueteSchema, 'params'),
              async (req, res, next) => {
  try {
    const { id } = req.params;
    const tipopaquete = await service.delete(id);
    res.json({
      message: 'eliminado',
      tipopaquete
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
