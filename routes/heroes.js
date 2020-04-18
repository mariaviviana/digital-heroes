const express = require('express');
let router = express.Router();
const heroesController = require('../controllers/heroesControllers.js');

router.get('/',heroesController);

router.get('/detalle/:id',heroesController );

router.get('/bio/:id/:ok?', heroesController);

module.exports = router;