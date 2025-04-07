const { getUsuarios, createUsuario } = require('../models/usuariosModel');

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await getUsuarios();
        res.json(usuarios);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

const crearUsuario = async (req, res) => {
    try {
        const { nombre, correo_electronico, contrasena, rol } = req.body;
        const nuevoUsuario = await createUsuario(nombre, correo_electronico, contrasena, rol);
        res.json(nuevoUsuario);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error del servidor');
    }
};

module.exports = {
    obtenerUsuarios,
    crearUsuario,
};