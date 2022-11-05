const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', async (req, res) => {
    console.log(res.requestTime);
    try {
    // const data = await JSON.parse(fs.readFileSync(`data.json`));
    const data = await require('./data.js');
    res.send(data);
    }
     catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
})

module.exports = app;