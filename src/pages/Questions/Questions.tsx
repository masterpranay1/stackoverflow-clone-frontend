import Sidebar from "../../components/Sidebar/Sidebar";
import Question from "../../components/Question/Question";
import { useAppSelector } from "../../app/hooks";

import "./Questions.css";

const Questions = () => {
  const isSidebarOpen = useAppSelector((state) => state.nav.isSidebarOpen);

  const questions = useAppSelector((state) => state.question.questions);

  return (
    <div className="questions_wrapper">
      {isSidebarOpen && <Sidebar />}
      <div className="main">
        <header>
          <h2>All Questions</h2>
          <button className="primary">Ask Question</button>
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

export default Questions;
