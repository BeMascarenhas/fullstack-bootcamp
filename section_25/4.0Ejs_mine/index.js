
import express from "express";






const port = 3000;
const app = express();



function dayOfWeek(date) {
  if (date.getDay() === 0 || date.getDay() === 6) {
    return "the weekend it's time to have some fun";
  }else{
    return "a weekday, is's time to work hard";
  }
}


app.get("/", (req, res) => {
    res.render("index.ejs", {text: dayOfWeek(new Date())});
    });








app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});