const toDoListLoadController = require("../controller/toDoListLoadController");

exports.toDoListLoadRouter = function (app) {
  app.get("/toDoList/api/toDoListLoad", toDoListLoadController.toDoListLoad);
};
