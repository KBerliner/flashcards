import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
};

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            action.quizIds = [];
            state[action.payload.topic].push(action.payload);
        }
    }
});

export const selectTopics = state => state.topics;
export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
