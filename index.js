const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("hello world from my second Node");
});

const users = [
  { id: 0, name: "Shabana", email: "shabana@gmail.com", phone: "01879664431" },
  {
    id: 1,
    name: "Shabanoor",
    email: "Shabanoor@gmail.com",
    phone: "01879664431",
  },
  {
    id: 2,
    name: "Srabonti",
    email: "Srabonti@gmail.com",
    phone: "01879664431",
  },
  { id: 3, name: "Purnima", email: "Purnima@gmail.com", phone: "01879664431" },
  { id: 4, name: "Rokeya", email: "Nayekka@gmail.com", phone: "01879664431" },
  { id: 5, name: "Aleya", email: "Aleya@gmail.com", phone: "01879664431" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  //use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);

  // res.send(JSON.stringify(newUser))
  res.json(newUser);
});

//dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("yammy yammy tok marka amm.");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
