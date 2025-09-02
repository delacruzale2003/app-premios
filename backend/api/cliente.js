const conectarDB = require('../db');  // Conectar a la base de datos
const Cliente = require('../models/Cliente');

// Función para registrar un cliente
module.exports = async (req, res) => {
    await conectarDB();  // Conectar a la base de datos antes de manejar la solicitud

    if (req.method === 'POST') {
        return await registrarCliente(req, res);
    }

    res.status(405).json({ message: 'Método no permitido' });
};

// Función para registrar un cliente
const registrarCliente = async (req, res) => {
    const { dni, nombre, telefono } = req.body;

    try {
        // Crear el cliente
        const cliente = new Cliente({
            dni,
            nombre,
            telefono
        });

        // Guardar el cliente en la base de datos
        await cliente.save();
        res.status(201).json({ message: 'Cliente registrado correctamente', cliente });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar cliente', error });
    }
};