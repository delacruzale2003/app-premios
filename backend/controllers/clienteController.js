const Cliente = require('../models/Cliente');
const Premio = require('../models/Premio');

exports.registrarCliente = async (req, res) => {
    const { dni, nombre, telefono } = req.body;

    try {
        // Crear el cliente
        const cliente = new Cliente({
            dni,
            nombre,
            telefono
        });

        // Guardar el cliente
        await cliente.save();
        res.status(201).json({ message: 'Cliente registrado correctamente', cliente });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar cliente', error });
    }
};
