const mongoose = require("mongoose");
require ("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors")
const morgan = require("morgan");

app.use(express.json());
app.use(cors())
app.use(morgan("dev"))
app.use(require('./routes/todos.route'))

const { PORT, MONGO_SERVER } = process.env

mongoose
  .connect(MONGO_SERVER)
  .then(() => console.log("Успешно соединились с Сервером"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(PORT, () => {
  console.log("подключен");
});