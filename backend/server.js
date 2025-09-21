import express from "express";

const app = express(); 

// req,res -> handles the request and sends a response
app.get("/api/notes", (req,res) => {
    res.status(200).send("you got 5 notes");
});

app.post("/api/notes", (req,res) => {
    res.status(201).json({message:"Post were created successfully!"})
});

// :id indicates a dynamic route parameter that can be replaced with any value
app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({message: "Post Update successfully!"});
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message: "Note Deleted successfully!"});
});

app.listen(5001,() => {
    console.log("Sever has started on PORT: 5001");
});