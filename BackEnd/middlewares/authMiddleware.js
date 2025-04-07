const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'tu_secreto_jwt');
        const user = await pool.query('SELECT * FROM Usuarios WHERE id_usuario = $1', [decoded.id]);

        if (!user.rows[0]) {
            throw new Error();
    }

    req.user = user.rows[0]; // Guardar el usuario en la solicitud para usarlo en las siguientes rutas
    next();

    } catch (err) {
    res.status(401).json({ error: 'Token inválido o expirado' });
    }
};

module.exports = verifyToken;