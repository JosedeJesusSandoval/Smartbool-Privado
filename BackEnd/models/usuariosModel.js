const pool = require('../config/db');

const getUsuarios = async () => {
    const { rows } = await pool.query('SELECT * FROM Usuarios');
    return rows;
};

const createUsuario = async (nombre, correo_electronico, contrasena, rol) => {
    const { rows } = await pool.query(
        'INSERT INTO Usuarios (nombre, correo_electronico, contrasena, rol) VALUES ($1, $2, $3, $4) RETURNING *',
        [nombre, correo_electronico, contrasena, rol]
    );
    return rows[0];
};

module.exports = {
    getUsuarios,
    createUsuario,
};