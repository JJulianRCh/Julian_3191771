DROP DATABASE IF EXISTS libreria;
CREATE DATABASE IF NOT EXISTS libreria;
USE libreria;

CREATE TABLE libro(
    id INT AUTO_INCREMENT PRIMARY KEY,
    autor VARCHAR(60) NOT NULL,
    titulo VARCHAR(60) NOT NULL,
    categoria VARCHAR(30) NOT NULL,
    anio NUMERIC(4) NOT NULL,
    paginas INT NOT NULL,
    unidades INT NOT NULL,
    precio DECIMAL(6, 2)
);
