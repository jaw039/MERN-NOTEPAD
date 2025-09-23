import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
        <button onClick = {() => toast.success("success")} >Click Me</button> 
        <Routes>
            <Route path = "/" element = {<HomePage />} />
            <Route path = "/create" element = {<CreatePage />} />
            <Route path = "/note/:id" element = {<NoteDetailPage />} />
        </Routes>
        <Toaster />
    </div>
  );
};

export default App;