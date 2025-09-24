import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div data-theme = "nord">
        {/* <button onClick = {() => toast.success("success")} className = "text-red-500 p-4 bg-pink-300">Click Me</button>  */}
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