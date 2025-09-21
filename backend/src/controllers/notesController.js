 export async function getAllNotes(req,res) {
    res.status(200).send("you Just Fetched the notes");
}

 export async function createNote(req,res) {
    res.status(201).json({message:"Post were created successfully!"})
}

 export async function updateNote(req,res) {
    res.status(200).json({message: "Post Update successfully!"})
}

 export async function deleteNote(req,res) {
    res.status(200).json({message:"Note Deleted successfully!"})
}