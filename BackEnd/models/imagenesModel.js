const pool = require('../config/db');

const getImagenes = async () => {
    const { rows } = await pool.query('SELECT * FROM Imagenes');
    return rows;
};

const createImagen = async (id_usuario, nombre_imagen, formato) => {
    const { rows } = await pool.query(
        'INSERT INTO Imagenes (id_usuario, nombre_imagen, formato) VALUES ($1, $2, $3) RETURNING *',
        [id_usuario, nombre_imagen, formato]
    );
    return rows[0];
};

module.exports = {
    getImagenes,
    createImagen,
};