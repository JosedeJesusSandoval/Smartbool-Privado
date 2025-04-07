const pool = require('../config/db');

const getHistorial = async () => {
    const { rows } = await pool.query('SELECT * FROM Historial_de_procesos');
    return rows;
};

const createHistorial = async (id_usuario, id_imagen, estado) => {
    const { rows } = await pool.query(
        'INSERT INTO Historial_de_procesos (id_usuario, id_imagen, estado) VALUES ($1, $2, $3) RETURNING *',
        [id_usuario, id_imagen, estado]
    );
    return rows[0];
};

module.exports = {
    getHistorial,
    createHistorial,
};