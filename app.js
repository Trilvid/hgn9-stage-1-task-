const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', async (req, res) => {
    console.log(res.requestTime);
    try {
    const data = JSON.parse(fs.readFileSync(`data.json`));
        res.status(200).json({
            data
        })
    }
     catch (err) {
        res.status(500).json({
            status: "failed",
            message: err.message
        })
    }
})

module.exports = app;