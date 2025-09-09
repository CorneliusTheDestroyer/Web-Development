import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("Welcome");
})

app.request(port, () => {
    console.log(`Listening to port ${port}`)
})
