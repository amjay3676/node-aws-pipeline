const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

//routes
app.get("/", (req, res) => {
    res.send("This is home route");
});

app.get("/about", (req, res) => {
    res.send("this is about route")
})
app.listen(PORT, () =>{
    console.log("server is runnng on port ",+ PORT);
});