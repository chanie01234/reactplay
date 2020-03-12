const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const ENV = process.env.NODE_ENV;
const PORT = 8080;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(PORT, () => console.log(`Example app listening on port ${port}!`));

module.exports = app; 
