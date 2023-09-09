import { createSlice } from "@reduxjs/toolkit";

interface Question {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  answers: any[];
  votes: number;
  views: number;
  tags: string[];
}

interface QuestionState {
  questions: Question[];
  loading: boolean;
  // error: string | null;
}

const initialState: QuestionState = {
  questions: [],
  loading: false,
  // error: null,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    upvoteQuestion: (state, action) => {
      const question = state.questions.find(
        (question) => question.id === action.payload
      );
      if (question) {
        question.votes++;
      }
    },
    downvoteQuestion: (state, action) => {
      const question = state.questions.find(
        (question) => question.id === action.payload
      );
      if (question) {
        question.votes--;
      }
    },
    incrementView: (state, action) => {
      const question = state.questions.find(
        (question) => question.id === action.payload
      );
      if (question) {
        question.views++;
      }
    },
  },
});

export const { addQuestion, upvoteQuestion, downvoteQuestion, incrementView } =
  questionSlice.actions;
export default questionSlice.reducer;
