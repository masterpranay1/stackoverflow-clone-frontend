import Sidebar from "../../components/Sidebar/Sidebar";
import { useAppSelector } from "../../app/hooks";

import "./Homepage.css";

const Homepage = () => {
  const isSidebarOpen = useAppSelector((state) => state.nav.isSidebarOpen);

  const questions = [
    {
      id: 1,
      title: "How to use Redux with Typescript?",
      description: "I'm trying to use Redux with Typescript but I'm having trouble making it work. I'm using the Redux Toolkit and I'm trying to create a store with the configureStore function. I'm getting the following error: Argument of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>' is not assignable to parameter of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>'.",
      votes: 10,
      answers: 2,
      views: 20,
    },
    {
      id: 2,
      title: "How to use Redux with Typescript?",
      description: "I'm trying to use Redux with Typescript but I'm having trouble making it work. I'm using the Redux Toolkit and I'm trying to create a store with the configureStore function. I'm getting the following error: Argument of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>' is not assignable to parameter of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>'.",
      votes: 10,
      answers: 2,
      views: 20,
    },
    {
      id: 2,
      title: "How to use Redux with Typescript?",
      description: "I'm trying to use Redux with Typescript but I'm having trouble making it work. I'm using the Redux Toolkit and I'm trying to create a store with the configureStore function. I'm getting the following error: Argument of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>' is not assignable to parameter of type 'Reducer<CombinedState<{ nav: { isSidebarOpen: boolean; }; }>, AnyAction>'.",
      votes: 10,
      answers: 2,
      views: 20,
    }
  ]

  return (
    <div className="homepage_wrapper">
      {isSidebarOpen && <Sidebar />}
      <div className="main">
        <header>
          <h2>Top Questions</h2>
          <button className="primary">Ask Question</button>
        </header>

        <div className="questions">
          {
            questions.map((question) => {
              return (
                <div className="question" key={question.id}>
                  <div className="question__votes">
                    <span>{question.votes}</span>
                    <span>votes</span>
                  </div>
                  <div className="question__answers">
                    <span>{question.answers}</span>
                    <span>answers</span>
                  </div>
                  <div className="question__views">
                    <span>{question.views}</span>
                    <span>views</span>
                  </div>
                  <div className="question__content">
                    <h3>{question.title}</h3>
                    <p>{question.description}</p>
                  </div>
                </div>
              )
            })
          }

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
