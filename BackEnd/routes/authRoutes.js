const express = require('express');
const { register, login } = require('../controllers/authController');
const verifyToken = require('../middlewares/authMiddleware');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const checkRole = require('../middlewares/checkRole');


const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', async (req, res) => {
  const { correo_electronico } = req.body;

  // 1. Verificar si el usuario existe
  const user = await pool.query('SELECT * FROM usuarios WHERE correo_electronico = $1', [correo_electronico]);
  if (!user.rows[0]) return res.status(404).json({ error: 'Correo no registrado' });

  // 2. Generar token y fecha de expiración
  const token = crypto.randomBytes(20).toString('hex');
  const expires = new Date(Date.now() + 3600000); // 1 hora

  // 3. Guardar token en la base de datos
  await pool.query(
    'UPDATE Usuarios SET reset_password_token = $1, reset_password_expires = $2 WHERE id_usuario = $3',
    [token, expires, user.rows[0].id_usuario]
  );

  // 4. Enviar correo 
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    to: correo_electronico,
    subject: 'Restablece tu contraseña',
    text: `Haz clic en este enlace para restablecer tu contraseña: http://tu-frontend.com/reset-password?token=${token}`,
  };

  await transporter.sendMail(mailOptions);
  res.json({ message: 'Correo de recuperación enviado' });
});

// Restablecer contraseña
router.post('/reset-password', async (req, res) => {
  const { token, nueva_contrasena } = req.body;

  // 1. Buscar usuario con token válido
  const user = await pool.query(
    'SELECT * FROM Usuarios WHERE reset_password_token = $1 AND reset_password_expires > NOW()',
    [token]
  );
  if (!user.rows[0]) return res.status(400).json({ error: 'Token inválido o expirado' });

  // 2. Hashear nueva contraseña
  const hashedPassword = await bcrypt.hash(nueva_contrasena, 10);

  // 3. Actualizar contraseña y limpiar token
  await pool.query(
    'UPDATE Usuarios SET contrasena = $1, reset_password_token = NULL, reset_password_expires = NULL WHERE id_usuario = $2',
    [hashedPassword, user.rows[0].id_usuario]
  );

  res.json({ message: 'Contraseña actualizada correctamente' });
});

router.get('/profile', verifyToken, (req, res) => {
  res.json(req.user); // Devuelve datos del usuario autenticado
});

router.get('/dashboard', verifyToken, checkRole(['Administrador']), (req, res) => {
  res.json({ message: 'Bienvenido al panel de administración' });
});

router.post('/articulos', verifyToken, checkRole(['Administrador', 'Editor']), (req, res) => {
  res.json({ message: 'Artículo creado' });
});


module.exports = router;