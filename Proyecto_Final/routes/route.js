const express = require("express");
const mysql = require("mysql2");
const d = require("../app");
const router = express.Router();


router.get('/', (req, res) => res.render("index"));

router.get('/agregar', (req, res) => res.render("agregar"));

module.exports = router;
