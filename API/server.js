// Imports --------------
const express = require('express');
const cors = require("cors");
const mysql = require("mysql2");

// Variables ------------
const app = express();

// Middleware -------------
app.use(cors())

// MySQL Connection ---------
const db = mysql.createConnection({
    host: "localhost",
    user: "Brandon",
    password: "brandonsql",
    database: "data"
});

// Endpoints -------------
app.get("/api/:category", (req, res) => {
    const query = `SELECT * FROM products WHERE category='${req.params.category}'`;
    
    db.query(query, (error, data ) => {
        if(error) {
            return res.json(error);
        } else {
            return res.json(data);
        }
    })
})
app.get("/api/:category/:product", (req, res) => {
    const query = `SELECT * FROM products WHERE slug='${req.params.product}'`;
    
    db.query(query, (error, data ) => {
        if(error) {
            return res.json(error);
        } else {
            return res.json(data);
        }
    })
})

// Server Start ---------
app.listen(8800, () => {
    console.log("Connected to server.")
});