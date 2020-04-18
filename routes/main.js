const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers.js');

router.get('/',mainController);

router.get('/creditos',mainController);

router.get('*',mainController);

module.exports = router;