import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express(); 

app.use("/api/notes", notesRoutes)

app.listen(5001,() => {
    console.log("Sever has started on PORT: 5001");
});