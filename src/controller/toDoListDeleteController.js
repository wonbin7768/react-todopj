const { pool } = require("../../db");
exports.toDoListDelete = async function (req, res) {
  const idx = req.body.idx;
  const connection = await pool.getConnection((err, connection) => {
    if (err) throw err;
    else {
      connection.query(
        "delete from todo where idx = ?;",
        idx,
        (err, results) => {
          if (err) throw err;
          else {
            connection.release();
            console.log("todolist delete succes");
          }
        }
      );
    }
  });
};
