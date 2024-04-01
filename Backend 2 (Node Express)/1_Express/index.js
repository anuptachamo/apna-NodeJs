const express = require("express");
const app = express();
// console.dir(app);

let port = 3000;

// route example
app.get("/", (req, res) => {
  res.send("Hell0, I am root path");
});

// // route example
// app.get("/apple", (req, res) => {
//   res.send("you contacted apple path");
// });

// route example (wild card - exist na vako path halda yo send gardinxa)
// app.get("*", (req, res) => {
//   res.send("This path doesn't exist");
// });

// // route example
// app.post("/", (req, res) => {
//   res.send("This is home post path");
// });

// Path parameters example
// app.get("/:username", (req, res) => {
//   let { username } = req.params;
//   res.send(`This account belongs to @${username}`);
// });

// Query Strings example
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("nothing search");
  } else {
    res.send(`search result for query: ${q}`);
  }
});

// app.use((req, res) =>{
//     console.log("request received");
//     res.send("this is a basic response")
// })

//port no : 1300-65000, 1300 vanda tala chai internet system le use garirahunchha
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

//   NOTE: Test this using https://hoppscotch.io/
