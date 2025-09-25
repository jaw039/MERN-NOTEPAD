import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUI";
import axios from "axios";
import toast from "react-hot-toast";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);  
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
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
        console.log("loading is false");
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
    </div>

  );
};

export default HomePage;