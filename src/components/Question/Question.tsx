import React from 'react';

interface QuestionProps {
  question: {
    id: number;
    votes: number;
    answers: number;
    views: number;
    title: string;
    description: string;
    tags: string[];
  };
}

const Question: React.FC<QuestionProps> = ({ question }) => {
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
      <div className="question__tags">
        {question.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Question;
