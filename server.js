const connection = require('./conf'); //a decommenter une fois conf.js configure
// ***** liste des modules installes + nodemon
const bodyParser = require("body-parser");
const cors = require('cors')
const express = require('express');
const morgan = require("morgan");

const Sequelize = require("sequelize");


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded + // parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded + // parse application/json


app.use(morgan("dev"));
app.use(morgan(":method :url :status :res[content-length] - :response-time "));

app.use(cors());


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    };
    console.log(`Server is listening on port ${port}`);
});