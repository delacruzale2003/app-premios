const mongoose = require('mongoose');

const conectarDB = async () => {
    if (mongoose.connections[0].readyState) {
        return; // Ya está conectado
    }

    try {
        await mongoose.connect('mongodb+srv://delacruzcalderonalejandro23_db_user:jv98VjH5tUDcFQhp@cluster0.drcsze1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
    }
};

module.exports = conectarDB;