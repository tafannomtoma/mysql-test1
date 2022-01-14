
const { createPool } = require("mysql")
const pool = createPool({
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "tafannom",
    password: "toma01764",
    database: "testdb"
})

console.log(pool)
module.exports = pool