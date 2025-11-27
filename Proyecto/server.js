// server.js
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');

const rutasLogin = require('./routes/login');
const rutasLista = require('./routes/lista');

const app = express();

// Motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sesión
app.use(session({
    secret: "clave_unica",
    resave: false,
    saveUninitialized: false
}));

// Rutas
app.use('/', rutasLogin);
app.use('/', rutasLista);

// Ruta raíz
app.get('/', (req, res) => res.redirect('/login'));

// Servidor
app.listen(3000, () =>
    console.log("Servidor en http://localhost:3000")
);
