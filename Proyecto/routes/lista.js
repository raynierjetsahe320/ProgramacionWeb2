const express = require('express');
const router = express.Router();
const db = require('../db/conexion');

// Middleware de autenticación
function auth(req, res, next) {
    if (req.session.usuario) return next();
    res.redirect('/login');
}

// MOSTRAR LISTA
router.get('/lista', auth, (req, res) => {
    db.query("SELECT * FROM list ORDER BY id", (err, datos) => {
        if (err) throw err;
        res.render('lista', { registros: datos });
    });
});

// AGREGAR
router.post('/agregar', auth, (req, res) => {
    const { id, nombre, apellido_paterno, correo, numero_celular, edad } = req.body;

    const idNum = parseInt(id);
    const edadNum = parseInt(edad);

    if (isNaN(idNum) || idNum < 0 ||
        !nombre || !apellido_paterno ||
        !correo || !numero_celular ||
        isNaN(edadNum) || edadNum < 0) {
        return res.send(`<script>alert("Verifica los datos (no se permiten valores vacíos o negativos).");window.location.href="/lista";</script>`);
    }

    db.query(
        "INSERT INTO list (id, nombre, apellido_paterno, correo, numero_celular, edad) VALUES (?, ?, ?, ?, ?, ?)",
        [idNum, nombre, apellido_paterno, correo, numero_celular, edadNum],
        err => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.send(`<script>alert("ID duplicado");window.location.href="/lista";</script>`);
                }
                throw err;
            }
            res.redirect('/lista');
        }
    );
});

// EDITAR
router.post('/editar/:id', auth, (req, res) => {
    const idViejo = req.params.id;
    const { id, nombre, apellido_paterno, correo, numero_celular, edad } = req.body;

    const idNum = parseInt(id);
    const edadNum = parseInt(edad);

    if (isNaN(idNum) || idNum < 0 ||
        !nombre || !apellido_paterno ||
        !correo || !numero_celular ||
        isNaN(edadNum) || edadNum < 0) {
        return res.json({ error: "Datos inválidos. Revisa los campos." });
    }

    db.query(
        "UPDATE list SET id=?, nombre=?, apellido_paterno=?, correo=?, numero_celular=?, edad=? WHERE id=?",
        [idNum, nombre, apellido_paterno, correo, numero_celular, edadNum, idViejo],
        err => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY")
                    return res.json({ error: "ID duplicado" });
                throw err;
            }
            res.json({ ok: true });
        }
    );
});

// ELIMINAR
router.get('/eliminar/:id', auth, (req, res) => {
    db.query("DELETE FROM list WHERE id=?", [req.params.id], err => {
        if (err) throw err;
        res.redirect('/lista');
    });
});

module.exports = router;
