const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/',mainController.frase);

router.get('/creditos',mainController.creditos);

router.get('*',mainController.default);

module.exports = router;