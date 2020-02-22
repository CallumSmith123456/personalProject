const express = require("express");
const app = express(); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8000, (req, res) => {
    console.log("Server has started on port 8000");
});