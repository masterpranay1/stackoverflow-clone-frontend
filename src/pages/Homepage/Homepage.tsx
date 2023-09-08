import Sidebar from "../../components/Sidebar/Sidebar";
import Question from "../../components/Question/Question";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

import "./Homepage.css";

const Homepage = () => {
  const isSidebarOpen = useAppSelector((state) => state.nav.isSidebarOpen);
  const navigate = useNavigate();

  const questions = useAppSelector((state) => state.question.questions);

  return (
    <div className="homepage_wrapper">
      {isSidebarOpen && <Sidebar />}
      <div className="main">
        <header>
          <h2>Top Questions</h2>
          <button className="primary" onClick={() => {
            navigate("/ask-question");
          }}>Ask Question</button>
        </header>

        <div className="questions">
          {questions.map((question) => {
            return <Question question={question} key={question.id} />;
          })}

          {questions.length === 0 && (
            <div className="no_questions">
              <h3>No questions found</h3>
              <p>Be the first one to ask a question</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
