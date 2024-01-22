import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state[action.payload.id] = action.payload;
        }
    }
});

export const selectCards = (id) => (state) => state.cards[id];
export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;