import Sidebar from "../../components/Sidebar/Sidebar";
import Question from "../../components/Question/Question";
import { useAppSelector } from "../../app/hooks";

import "./Questions.css";

const Questions = () => {
  const isSidebarOpen = useAppSelector((state) => state.nav.isSidebarOpen);

  const questions = [
    {
      id: 1,
      title: "How to use Redux with Typescript?",
      description:
        "I'm trying to use Redux with Typescript but I'm having trouble making it work. I'm using the Redux Toolkit and I'm trying to create a store with the configureStore function. I'm getting the following error: Argument of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>' is not assignable to parameter of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>'.",
      votes: 10,
      answers: 2,
      views: 20,
      tags: ["react", "redux", "typescript"],
    },
    {
      id: 2,
      title: "How to use Redux with Typescript?",
      description:
        "I'm trying to use Redux with Typescript but I'm having trouble making it work. I'm using the Redux Toolkit and I'm trying to create a store with the configureStore function. I'm getting the following error: Argument of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>' is not assignable to parameter of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>'.",
      votes: 10,
      answers: 2,
      views: 20,
      tags: ["react", "redux", "typescript"],
    },
    {
      id: 2,
      title: "How to use Redux with Typescript?",
      description:
        "I'm trying to use Redux with Typescript but I'm having trouble making it work. I'm using the Redux Toolkit and I'm trying to create a store with the configureStore function. I'm getting the following error: Argument of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>' is not assignable to parameter of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>'.",
      votes: 10,
      answers: 2,
      views: 20,
      tags: ["react", "redux", "typescript"],
    },
  ];

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
