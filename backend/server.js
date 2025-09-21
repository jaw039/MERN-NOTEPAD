import express from "express";
const app = express(); 


// req,res -> handles the request and sends a response
app.get("/api/notes", (req,res) => {
    res.send("you got 5 notes");
});

app.listen(5001,() => {
    console.log("Sever has started on PORT: 5001");
});