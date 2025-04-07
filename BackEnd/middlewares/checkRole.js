const checkRole = (rolesPermitidos) => {
    return async (req, res, next) => {
      // 1. Obtener el ID del usuario desde el token (ya verificado por authMiddleware)
        const userId = req.user.id;
  
        try {
        // 2. Consultar la base de datos para obtener el rol del usuario
        const query = `
            SELECT r.nombre_rol 
            FROM Usuarios u
            JOIN Roles r ON u.rol = r.id_rol
            WHERE u.id_usuario = $1
        `   ;
        const { rows } = await pool.query(query, [userId]);

        if (rows.length === 0) {
            return res.status(403).json({ error: 'Usuario no encontrado' });
        }

        const userRole = rows[0].nombre_rol;

        // 3. Verificar si el rol del usuario está en la lista de permitidos
        if (!rolesPermitidos.includes(userRole)) {
            return res.status(403).json({ 
            error: 'Acceso denegado: No tienes permisos suficientes',
            rol_requerido: rolesPermitidos,
            rol_actual: userRole
            });
        }

        // 4. Si todo está bien, continuar
        next();
        } catch (err) {
            console.error('Error en checkRole:', err);
            res.status(500).json({ error: 'Error al verificar permisos' });
        }
    };
};

module.exports = checkRole;