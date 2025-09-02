const conectarDB = require('../db');  // Conectar a la base de datos
const Tienda = require('../models/Tienda');
const tiendaController = require('../controllers/tiendaController');

module.exports = async (req, res) => {
    await conectarDB();  // Conectar a la base de datos antes de manejar la solicitud

    if (req.method === 'POST') {
        return await tiendaController.crearTienda(req, res);
    }

    if (req.method === 'GET') {
        return await tiendaController.getTiendaById(req, res);
    }

    res.status(405).json({ message: 'Método no permitido' });
};