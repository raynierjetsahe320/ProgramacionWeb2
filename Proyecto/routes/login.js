const express = require('express');
const router = express.Router();
const db = require('../db/conexion');

// LOGIN
router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

router.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [usuario, password],
        (err, result) => {
            if (err) throw err;

            if (result.length > 0) {
                req.session.usuario = usuario;
                return res.redirect('/lista');
            }

            res.render('login', { error: 'Usuario o contraseña incorrectos' });
        }
    );
});

// NUEVO USUARIO
router.get('/adduser', (req, res) => {
    res.render('adduser', { error: null });
});

router.post('/adduser', (req, res) => {
    const { usuario, password } = req.body;

    db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [usuario, password],
        (err) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.render('adduser', { error: 'Ese usuario ya existe' });
                }
                throw err;
            }

            res.redirect('/login');
        }
    );
});

// LOGOUT
router.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/login'));
});

module.exports = router;
