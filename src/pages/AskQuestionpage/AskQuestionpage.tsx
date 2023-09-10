import React, { useState } from 'react';
import './AskQuestionpage.css';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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

  const token = useAppSelector((state) => state.auth.token);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/questions/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify({
        title: question.title,
        description: question.description,
        tags: question.tags.split(','),
      })
    })

    const data = await res.json();
    console.log(data);

    dispatch(addQuestion({
      id: data.userId,
      title: data.title,
      description: data.description,
      tags: data.tags,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      votes: data.votes,
      answers: data.answers,
      views: data.views,
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
