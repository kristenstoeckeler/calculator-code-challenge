//requiring express and storing instance in express variable
const express = require('express');
require('dotenv').config();

//declaring app variable to store instance of express
const app = express();
const bodyParser = require('body-parser');

//requiring calculation.router script and storing instance to calcRouter variable
const calcRouter = require('./routes/calculation.router');

// Body parser middleware, to parse incoming requests 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes
app.use('/calc', calcRouter);

//serving static files
app.use(express.static('build'));

//declaring Port
const PORT = process.env.PORT || 5000;


//express app.listen function, listening to port 5000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});