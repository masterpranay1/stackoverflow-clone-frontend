import "./style.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { upvoteQuestion, downvoteQuestion } from "../../features/question/questionslice";

interface Answer {
  id: number;
  text: string;
}

interface QuestionDetailProps {
  question: {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    answers: Answer[];
    votes: number;
    views: number;
    tags: string[];
  };
}

const QuestionDetail = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const questions = useAppSelector((state) => state.question.questions);
  const isSidebarOpen = useAppSelector((state) => state.nav.isSidebarOpen);
  const token = useAppSelector((state) => state.auth.token);

  const param = useParams<{ questionId: string }>();
  const question = questions.find(
    (question) => question.id === param.questionId
  ) as QuestionDetailProps["question"];

  const handleUpvote = () => {
    if (token === null) {
      navigate("/login");
      return;
    }
    dispatch(upvoteQuestion(question.id));
  };

  const handleDownvote = () => {
    if (token === null) {
      navigate("/login");
      return;
    }
    dispatch(downvoteQuestion(question.id));
  };

  return (
    <div className="question-detail-wrapper">
      {isSidebarOpen && <Sidebar />}
      <div className="question-detail">
        <header>
          <div className="header-title">
            <h1>{question.title}</h1>
            <button className="primary" onClick={() => {
              navigate(`/ask-question`)
            }}>Ask Question</button>
          </div>

          <div className="header-stats">
            <span>Asked {question.createdAt}</span>
            <span>Modified {question.updatedAt}</span>
            <span>Viewed {question.views} times</span>
          </div>
        </header>

        <section className="question-detail-question">
          <div className="vote-wrapper">
            <span className="icon" onClick={handleUpvote}>U</span>
            <span className="votes">{question.votes}</span>
            <span className="icon" onClick={handleDownvote}>D</span>
          </div>

          <div className="question-content">
            <p>{question.description}</p>
            <div className="tags">
              {question.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="question-detail-answer">
          <h2>{question.answers.length} Answers</h2>
          {question.answers.map((answer) => (
            <div key={answer.id} className="answer">
              <div className="vote-wrapper">
                <span>U</span>
                <span>{answer.id}</span>
                <span>D</span>
              </div>

              <div className="answer-content">
                <p>{answer.text}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default QuestionDetail;
