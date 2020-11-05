const express = require('express');
require('dotenv').config();


const app = express();
const bodyParser = require('body-parser');

// //Route includes
// const calcRouter = require('./routes/calculation.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// /* Routes */
// app.use('/calc', calcRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;


app.post('/calc', (req, res) => {
    console.log('made it to server.js');
    res.sendStatus(200); 
})






/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});