import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    searchValue: "",
    selectedValues: ""
}

const moviesSlice = createSlice({
    name : "movies",
    initialState,
    reducers:{
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setSelectedValue: (state, action) => {
            state.selectedValues = action.payload
        }
    }
})

export const { setMovies, setSearchValue, setSelectedValue } = moviesSlice.actions;
export default moviesSlice.reducer;
