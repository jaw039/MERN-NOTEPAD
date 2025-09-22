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

export async function getNoteById(req,res) {
    try{
        const note = await Note.findById(req.params.id)
        if (!note) return res.status(404).json({message: "Note not found!"});
        res.json(note);
    } catch (error) {
        console.error("Error in getNoteById controller method" , error);
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
    try {
        const {title,content} = req.body
        // get the unique id from each notes 
        const updateNote = await Note.findByIdAndUpdate(
            req.params.id, 
            {title,content},
            {
                // Ensures the updated notes return back to the user 
                new: true,
            }
        );

        if(!updateNote) return res.status(404).json({message:"Note not found"});

        res.status(200).json(updateNote);
    } catch (error) {
        console.error("Error in updateNote controller method" , error);
        res.status(500).json({message: "Internal server error"});
    }
}

 export async function deleteNote(req,res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if(!deletedNote) return res.status(404).json({message:"Note not found"});

        res.status(200).json({message:"Note deleted successfully"});
    } catch(error) {
        console.error("Error in deleteNote controller method" , error);
        res.status(500).json({message: "Internal server error"});
    }
}