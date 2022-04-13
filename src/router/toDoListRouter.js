const toDoListController = require("../controller/toDoListController");

exports.toDoListRouter = function (app) {
  app.post("/api/toDoList", toDoListController.toDoListInsert);
};
