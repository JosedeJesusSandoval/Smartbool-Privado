const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

// Registro de usuario
const register = async (req, res) => {
    const { nombre, correo_electronico, contrasena, rol } = req.body;

    try {
        // Verificar si el usuario ya existe
        const userExists = await pool.query(
        'SELECT * FROM Usuarios WHERE correo_electronico = $1', 
        [correo_electronico]
    );

    if (userExists.rows.length > 0) {
        return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    // Hashear contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contrasena, salt);

    // Guardar usuario en la base de datos
    const newUser = await pool.query(
        'INSERT INTO Usuarios (nombre, correo_electronico, contrasena, rol) VALUES ($1, $2, $3, $4) RETURNING *',
        [nombre, correo_electronico, hashedPassword, rol]
    );

    res.status(201).json(newUser.rows[0]);

    } catch (err) {
    res.status(500).json({ error: err.message });
    }
};

// Login de usuario
const login = async (req, res) => {
    const { correo_electronico, contrasena } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await pool.query(
        'SELECT * FROM Usuarios WHERE correo_electronico = $1', 
        [correo_electronico]
    );

    if (user.rows.length === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Validar contraseña
    const validPassword = await bcrypt.compare(contrasena, user.rows[0].contrasena);
    if (!validPassword) {
        return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    // Generar token JWT (válido por 1 hora)
    const token = jwt.sign(
        { id: user.rows[0].id_usuario }, 
        process.env.JWT_SECRET || 'tu_secreto_jwt', // Usa una variable de entorno en producción
        { expiresIn: '1h' }
    );

    res.json({ token });

    } catch (err) {
    res.status(500).json({ error: err.message });
    }
};

module.exports = { register, login };