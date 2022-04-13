const { pool } = require("../../db");
exports.toDoListLoad = async function (req, res) {
  const connection = await pool.getConnection((err, connection) => {
    if (err) throw err;
    else {
      connection.query("select * from todo", (err, results) => {
        if (err) throw err;
        else {
          connection.release();
          console.log(results);
          console.log("todolist load succes");
          return res.send(results);
        }
      });
    }
  });
};
