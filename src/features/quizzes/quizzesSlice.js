import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {}
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            state[action.payload.id] = action.payload;
        }
    }
});

export const selectQuizzes = (state) => state.quizzes;
export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;