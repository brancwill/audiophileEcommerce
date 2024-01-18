// Imports --------------
const express = require('express');
const cors = require("cors");
const mysql = require("mysql2");
require('dotenv').config();

// Variables ------------
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware -------------
app.use(cors())

// MySQL Connection ---------
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: {
        rejectUnauthorized: true
    }
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to Planetscale.");
})

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
app.listen(PORT, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log("Connected to server.")
});