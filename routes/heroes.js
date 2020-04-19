const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesControllers.js');

router.get('/',heroesController.listado);

router.get('/detalle/:id',heroesController.detalleId );

router.get('/bio/:id/:ok?', heroesController.biografia);

module.exports = router;