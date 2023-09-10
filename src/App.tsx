import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Questions from "./pages/Questions/Questions";
import Tagspage from "./pages/Tagspage/Tagspage";
import AskQuestionpage from "./pages/AskQuestionpage/AskQuestionpage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import QuestionDetail from "./pages/QuestionDetail";
import Profile from "./pages/Profile/Profile";
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
          <Route path="/ask-question" element={<AskQuestionpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/questions/:questionId" element={<QuestionDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
