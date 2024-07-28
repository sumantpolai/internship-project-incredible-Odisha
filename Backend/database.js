const {Pool} = require('pg')

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"Myproject",
    password:"2003",
    port:5432
})

module.exports = pool