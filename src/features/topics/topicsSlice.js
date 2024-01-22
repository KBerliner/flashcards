import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
};

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            action.payload.quizIds = [];
            state[action.payload.id] = action.payload;
        },
        addQuiz: (state, action) => {
            state[action.payload.id].quizIds.push(action.payload.id);
        }
    }
});

export const selectTopics = (state) => state.topics;
export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
