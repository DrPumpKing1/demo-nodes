const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("src"));

app.get("/", (req, res) => {
    const options = { root : path.join(__dirname) }
    
    res.sendFile("main.html", options, (err) => {
        if(err) {
            console.log(err);
            res.status(500).send({message: err.message});
        } else {
            console.log("Sent: main.html");
            res.status(200);
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});