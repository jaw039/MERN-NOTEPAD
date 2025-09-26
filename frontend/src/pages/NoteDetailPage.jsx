import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import api from "../libs/axios";


const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const navigate = useNavigate()

  const {id} = useParams();

  useEffect(() => {
    const fetchNote = async() => {
    try {
      const res = await api.get(`/notes/${id}`)
      setNote(res.data)
    } catch (error) {
      console.log("Error in fetching note", error);
      toast.error("Failed to fetch the note");
    } finally {
      setLoading(false);
    }
  };

  fetchNote();
  }, [id]);

  console.log({ note });
  return (
    <div>NoteDetailPage</div>
  )
};

export default NoteDetailPage;