import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
const data = {
  h1: "Write your name 👇",
};
app.get("/", (req, res) => {
  
  res.render("index.ejs",data);
});

app.post("/submit", (req, res) => {
const size = req.body["fName"].length + req.body["lName"].length;
console.log(size);
  res.render("index.ejs", {h1:"There are "+ size + " letters in your name"});

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
