const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./routes/route");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", router)
app.set("view engine", "ejs");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "libreria",
    port: 3306
});

//Comprobando conexion
db.connect(err => {
    if (err) {
        console.error("Error en coneccion ", err);
    } else {
        console.log("Conexion establecida");
    }
});

const port = 3006;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})


app.get('/', (req, res) => res.render("index"));


//Agregar tablas
app.post("/agregar", (req, res) => {
    const { autor, titulo, categoria, anio, paginas, unidades, precio } = req.body;
    const query = "INSERT INTO libro(autor, titulo, categoria, anio, paginas, unidades, precio) VALUES(?, ?, ?, ?, ?, ?, ?)";
    db.query(query, [autor, titulo, categoria, anio, paginas, unidades, precio], (err) => {
        if (err) {
            res.render("error");
        } else {
            res.render("editado");
        }
    });
});

//Tabla de los libros
app.get("/tabla", (req, res) => {
    const query = "SELECT * FROM libro";
    db.query(query, (err, results) => {
        if (err) {
            res.render("error");
        } else {
            res.render("tabla", {libreria: results});
        }
    });
});

//Editar Libro seleccionado
app.get("/editar/:id", (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM libro WHERE id = ?";
    db.query(query, [id], (err, results) => {
        if (err) {
            res.render("error");
        } else {
            res.render("editar", { libro: results[0] });
        }
    });
});

//Actualizar los campos del registro
app.post("/editar/:id", (req, res) => {
    const { id } = req.params;
    const { autor, titulo, categoria, anio, paginas, unidades, precio } = req.body;
    const query = "UPDATE libro SET autor = ?, titulo = ?, categoria = ?, anio = ?, paginas = ?, unidades = ?, precio = ? WHERE id = ?";
    db.query(query, [ autor, titulo, categoria, anio, paginas, unidades, precio, id], (err) => {
        if (err) {
            res.render("error");
        } else {
            res.render("editado");
        }
    });
});

//Eliminando el registro seleccionado
app.get("/eliminar/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM libro WHERE id = ?";
    db.query(query, [id], (err) => {
        if (err) {
            res.render("error");
        } else {
            res.render("eliminar");
        }
    });
});
