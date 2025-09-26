import express from "express"
import {createNote, deleteNote, getAllNotes, getNoteById, updateNote} from "../controllers/notesController.js";


const router = express.Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

// Dont need the :id parameter because we're only modifying something that already exists 
router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router

