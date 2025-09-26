import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
import RateLimitedUi from "../components/RateLimitedUI";
import api from "../libs/axios";


const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);  
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data)
        setIsRateLimited(false)
      } catch (error) {
          console.log("API Error:", error);
          console.log("Error type:", error.name);
          console.log("Error message:", error.message);
          if(error.response?.status === 429) {
            setIsRateLimited(true)
          }
          else {
            toast.error("Fail to fetch Notes")
          }
      } finally {
        console.log("loading is success");
        setLoading(false)
      }

    };

    fetchNotes();
  }, [])

  return (
    // minimum height screen
    <div className = "min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUi />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading  && <div className = "text-center text-primary py-10">Loading Notes....</div>}
        {notes.length === 0 && !isRateLimited && <NotesNotFound />}
        {notes.length > 0 && !isRateLimited && (
          <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map(note => (
            <NoteCard key = {note._id} note = {note} setNotes = {setNotes}/>
          ))}

          </div>
        )}
    </div>
  </div>
  );
};
 
export default HomePage;