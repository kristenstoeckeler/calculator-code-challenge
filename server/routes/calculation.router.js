const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



/* ROUTES HERE */
router.post('/', async (req, res) => {
  console.log("made it to server calculation router POST", req.body);
//   const queryText =
//     'INSERT INTO "project" ("user_id", "project_name") VALUES ($1, $2) RETURNING id';
//   pool
//     .query(queryText, [req.user.id, req.body.name])
//     .then((result) => {
//       console.log("Added new project to database");
//       res.send(result.rows[0]);
//       // res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log("Error on project router PUT");
//       res.sendStatus(500);
//     });
});



module.exports = router;