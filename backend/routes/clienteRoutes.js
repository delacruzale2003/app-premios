const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Registrar un cliente
router.post('/registrar', clienteController.registrarCliente);

module.exports = router;
