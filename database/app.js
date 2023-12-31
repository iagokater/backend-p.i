const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(express.json());

const volume = require('../routes/volume');

app.use('/volume', volume);

app.use('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;
