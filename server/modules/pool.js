
const pg = require("pg");
const url = require("url");

let config = {};


if (process.env.DATABASE_URL) {
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(":");

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1],
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
} else {
  config = {
    host: "localhost", // Server hosting the postgres database
    port: 5432, 
    database: "sezzle_calculator", // 
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
}

// this creates the pool that will be shared by all other modules
const pool = new pg.Pool(config);

pool.on("error", (err) => {
  console.log("Unexpected error on idle client", err);
  process.exit(-1);
});

//exporting pool
module.exports = pool;
