const { pool } = require("../../db");
exports.toDoListInsert = async function (req, res) {
  const todoList = req.body.join();
  const connection = await pool.getConnection((err, connection) => {
    if (err) throw err;
    else {
      connection.query(
        "insert into todo (todolist , dt) values (?,sysdate());",
        todoList,
        (err, results) => {
          if (err) throw err;
          else {
            connection.release();
            console.log("todolist insert succes");
          }
        }
      );
    }
  });
  console.log(req.body);
  console.log(todoList);
  return res.send(req.body);
};
