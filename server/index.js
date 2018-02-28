require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const Auth0Strategy = require("passport-auth0");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
const {
  AUTH_DOMAIN,
  CLIENT_SECRET,
  CLIENT_ID,
  PORT,
  CONNECTION_STRING
} = process.env;

//connect to DB
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

//Middlewares
app.use(express.static(`${__dirname}/../build`));
app.use(express.static("public"));
app.use(json());
app.use(cors());
app.use(bodyParser.json());

app.get("/api/todos", (req, res, next) => {
  app
    .get("db")
    .getList()
    .then(response => {
      console.log(response);
      res.json(response);
    });
});

app.post("/api/newTodo", (req, res, next) => {
  app
    .get("db")
    .newTodo([req.body.Title, req.body.Body])
    .then(response => {
      res.json("success");
    });
});

app.put("/api/editTodo", (req, res, next) => {
  console.log(req.body);

  app
    .get("db")
    .changeTodo([req.body.id, req.body.Title, req.body.Body])
    .then(response => {
      res.status(200).json("success");
    });
});

app.delete("/api/deleteTodo/:id", (req, res, next) => {
  console.log(req.params.id);
  app
    .get("db")
    .deleteTodo(req.params.id)
    .then(response => {
      res.json("success");
    });
});

// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// })

app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening on ${process.env.PORT || 3001}!`);
});
