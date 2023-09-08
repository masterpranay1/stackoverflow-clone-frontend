import React, { useState } from 'react';
import './AskQuestionpage.css';
import { useAppDispatch } from "../../app/hooks";
import { addQuestion } from "../../features/question/questionslice";
import { useNavigate } from "react-router-dom";

interface AskQuestionProps {
  // onSubmit: (question: Question) => void;
}

interface Question {
  title: string;
  description: string;
  tags: string;
}

const AskQuestion: React.FC<AskQuestionProps> = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [question, setQuestion] = useState<Question>({
    title: '',
    description: '',
    tags: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // onSubmit(question);
    dispatch(addQuestion({
      id: Math.random().toString(36),
      title: question.title,
      description: question.description,
      tags: question.tags.split(','),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      votes: 0,
      answers: [],
      views: 0,
    }));
    navigate("/");
    setQuestion({
      title: '',
      description: '',
      tags: '',
    });
  };

  return (
    <div className="ask-question">
      <h2>Ask a Question</h2>
      <div className="question-form">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={question.title}
          onChange={handleInputChange}
          placeholder="Enter your question title"
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={question.description}
          onChange={handleInputChange}
          placeholder="Enter your question description"
        />
        <label>Tags:</label>
        <input
          type="text"
          name="tags"
          value={question.tags}
          onChange={handleInputChange}
          placeholder="Enter tags (comma-separated)"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AskQuestion;
