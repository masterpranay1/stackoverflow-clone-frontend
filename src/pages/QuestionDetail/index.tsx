import React, { useState } from "react";
import "./style.css";
import { useAppSelector } from "../../app/hooks";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

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

  const questions = useAppSelector((state) => state.question.questions);
  const isSidebarOpen = useAppSelector((state) => state.nav.isSidebarOpen);

  const param = useParams<{ questionId: string }>();
  const question = questions.find(
    (question) => question.id === param.questionId
  ) as QuestionDetailProps["question"];

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
            <span className="icon">U</span>
            <span className="votes">{question.votes}</span>
            <span className="icon">D</span>
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
