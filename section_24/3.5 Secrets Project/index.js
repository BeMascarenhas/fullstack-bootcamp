//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const passwd = "teddy";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function checkpass(req, res, next) {
  if (req.body["password"] === passwd) {
    console.log("Correct password");
    next();
  } else {
    res.send("Incorrect password");
  }
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", checkpass, (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });