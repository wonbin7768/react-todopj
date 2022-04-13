const toDoListDeleteController = require("../controller/toDoListDeleteController");

exports.toDoListDeleteRouter = function (app) {
  app.post("/api/toDoListDelete", toDoListDeleteController.toDoListDelete);
};
