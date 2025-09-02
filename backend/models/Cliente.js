const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    dni: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    premio: { type: mongoose.Schema.Types.ObjectId, ref: 'Premio' },
    tienda: { type: mongoose.Schema.Types.ObjectId, ref: 'Tienda' },
    fecha_registro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cliente', ClienteSchema);