//var db = pgp('postgres://root@localhost:26257/health?sslmode=disable')c
const Pool = require("pg").Pool;

const pool = new Pool({
  host: "roach1",
  user: "root",
  port: 26257,
  database: "login"
});

module.exports = pool;