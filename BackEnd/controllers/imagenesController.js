const { getImagenes, createImagen } = require('../models/imagenesModel');

const obtenerImagenes = async (req, res) => {
    try {
        const imagenes = await getImagenes();
        res.json(imagenes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const crearImagen = async (req, res) => {
    try {
        const { id_usuario, nombre_imagen, formato } = req.body;
        const nuevaImagen = await createImagen(id_usuario, nombre_imagen, formato);
        res.json(nuevaImagen);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

module.exports = {
    obtenerImagenes,
    crearImagen,
};