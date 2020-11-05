const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', async (req,res) => {
  console.log('made it to server with GET request');
});


router.post('/', async (req, res) => {
  console.log("made it to server calculation router POST", req.body);
  const queryText =
    'INSERT INTO "calculation" ("val1", "val2", "operator", "result") VALUES ($1, $2, $3, $4);';
  pool
    .query(queryText, [req.body.state.valOne, req.body.state.valTwo, req.body.state.operator, req.body.result])
    .then((result) => {
      console.log("Added calculation to database");
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error on calculation router POST");
      res.sendStatus(500);
    });
});



module.exports = router;