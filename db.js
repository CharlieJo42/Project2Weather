const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "charliejo42",
    password: 0813,
    host: "localhost",
    port: 5432,
    database: "cities"
});

module.exports = pool;