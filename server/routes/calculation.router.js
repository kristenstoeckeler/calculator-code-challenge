//declaring express, pool and router for use
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET request
router.get('/', async (req,res) => {
  //declaring SQL statement as variable
  const queryText = 'SELECT * FROM "calculation" ORDER BY "id" DESC LIMIT 10;';

  //querying pool with SQL statement variable 'queryText'
  pool
    .query(queryText)
    .then((result) => {
      //sending results of query back to client
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on SELECT query for results ${error}`);
      res.sendStatus(500);
    });
});

//POST request
router.post('/', async (req, res) => {
  //declaring SQL statement as variable
  const queryText =
    'INSERT INTO "calculation" ("val1", "val2", "operator", "result") VALUES ($1, $2, $3, $4);';
  //querying pool with SQL statement variable 'queryText'
  pool
    .query(queryText, [
      req.body.state.valOne,
      req.body.state.valTwo,
      req.body.state.operator,
      req.body.result,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error on calculation router POST");
      res.sendStatus(500);
    });
});


//exporting router
module.exports = router;