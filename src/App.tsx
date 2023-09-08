import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Questions from "./pages/Questions/Questions";
import Tagspage from "./pages/Tagspage/Tagspage";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/tags" element={<Tagspage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
