require('dotenv').config();
const express = require('express');
const cors = require('cors');
app.use(cors());

const { dbConnection } = require('./database/config');

// Crete express server
const app = express();

// Cors Configuration
app.use(cors());

// Database

dbConnection();

// Routes
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hello world'
    });

});

app.listen(process.env.PORT, () => {
    console.log("Server running in port " + process.env.PORT);
})