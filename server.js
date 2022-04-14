const express = require('express');
const url = require('url');
const fs = require('fs');
const Routing = require('./Routing');

const app = express();

function readFileThenResponse(fileName, res) {

    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.end('err')
        }
        else {
            res.end(data);
        }
    });

}

app.use((req, res) => {
    Routing(req, res);
});

module.exports = app;