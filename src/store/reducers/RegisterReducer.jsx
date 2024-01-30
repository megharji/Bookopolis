import { createSlice } from "@reduxjs/toolkit";

const storedBooks = JSON.parse(localStorage.getItem("book"));

const initialState = {
    book: storedBooks ? storedBooks : []
};

export const registerSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        registerbook: (state, action) => {
            state.book.push(action.payload);
            localStorage.setItem("book", JSON.stringify(state.book));
        }
    }
});

export const { registerbook } = registerSlice.actions;
export default registerSlice.reducer;
