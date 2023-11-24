var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

const people = ["Nag", "Indu"];

app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});

app.post("/api/people", (req, res) => {
  const body = req.body;
  const { name } = body;
  people.push(name);
  res.status(201).json({ name });
});

module.exports = app;
