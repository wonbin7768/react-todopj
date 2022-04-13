const compression = require("compression");
const cors = require("cors");
const { toDoListRouter } = require("./src/router/toDoListRouter");
const { toDoListLoadRouter } = require("./src/router/toDoListLoadRouter");
const { toDoListDeleteRouter } = require("./src/router/toDoListDeleteRouter");

const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());

toDoListRouter(app);
toDoListLoadRouter(app);
toDoListDeleteRouter(app);

app.listen(4000, () => {
  console.log("4000");
});
