import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="nord" className="min-h-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
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



