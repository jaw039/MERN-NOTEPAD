import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js"
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

import cors from "cors"
dotenv.config();

const app = express(); 
const PORT = process.env.PORT || 5001


// midddleware (runs before route handlers)
app.use(cors({
    origin: "http://localhost:5173",
}))

// convert incoming JSON requests into Javascript objecst on req.body
app.use(express.json());
app.use(rateLimiter)


// custom middleware 
app.use((req,res,next) => {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
})

app.use("/api/notes", notesRoutes);

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server has started on PORT: ", PORT);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to database:", error);
        process.exit(1);
    });

