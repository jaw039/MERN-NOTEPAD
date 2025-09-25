import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUi from "../components/RateLimitedUI";
import axios from "axios";

const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data);
      } catch (error) {
          console.log("Error fetching Notes");
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