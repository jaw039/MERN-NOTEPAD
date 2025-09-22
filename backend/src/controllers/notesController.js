 import Note from "../models/Note.js"

 export async function getAllNotes(req,res) {
    try{
        const notes = await Note.find()
        res.status(200).json(notes)

    } catch(error) {
        console.error("Error in getAllNotes Controller", error)
        res.status(500).json({message: "Internal server error"});
    }
}

 export async function createNote(req,res) {
    // if user wants to create a note, we need to create a title + content
    try{
        const {title,content} = req.body
        const note = new Note({title, content})
        
        const savedNote = await note.save();
        res.status(201).json(savedNote)
    } catch (error) {
        console.error("Error in createNote controller method" , error);
        res.status(500).json({message: "Internal server error"});
        
    }
}

 export async function updateNote(req,res) {
    res.status(200).json({message: "Post Update successfully!"})
}

 export async function deleteNote(req,res) {
    res.status(200).json({message:"Note Deleted successfully!"})
}