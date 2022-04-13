const mysql = require("mysql");
const { host, user, port, password, database } = require("./secret");

exports.pool = mysql.createPool({
  host: host,
  user: user,
  port: port,
  password: password,
  database: database,
});
