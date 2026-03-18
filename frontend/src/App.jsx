import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";

export default function App() {
  return (
    <div className="relative h-full w-full" data-theme="coffee">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailsPage />} />
      </Routes>
    </div>
  );
}
