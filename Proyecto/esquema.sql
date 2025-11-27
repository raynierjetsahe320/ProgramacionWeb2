CREATE DATABASE IF NOT EXISTS sistema;
USE sistema;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (username, password) VALUES ('admin', '1234');

DROP TABLE IF EXISTS list;

CREATE TABLE list (
    id INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido_paterno VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    numero_celular VARCHAR(20) NOT NULL,
    edad INT NOT NULL
);

INSERT INTO list (id, nombre, apellido_paterno, correo, numero_celular, edad)
VALUES (1, 'Raynier', 'Torres', 'raynier@example.com', '5512345678', 21);

