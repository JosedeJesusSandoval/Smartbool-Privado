const { getHistorial, createHistorial } = require('../models/historialModel');

const obtenerHistorial = async (req, res) => {
    try {
        const historial = await getHistorial();
        res.json(historial);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const crearHistorial = async (req, res) => {
    try {
        const { id_usuario, id_imagen, estado } = req.body;
        const nuevoHistorial = await createHistorial(id_usuario, id_imagen, estado);
        res.json(nuevoHistorial);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

module.exports = {
    obtenerHistorial,
    crearHistorial,
};