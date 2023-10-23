import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//getting data from environment file
const queryStrings ={
    app_id: process.env.REACT_APP_APP_ID,
    app_key: process.env.REACT_APP_APP_KEY
}

// initial state initialized
const initialState = {
  items: []
};


//  https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=54bac442&app_key=c0e61aaca2bce24b3bc67b06cfc90bc5

// geting data from api
export const recipeItems = createAsyncThunk("items/getRecepieItems", async (query) => {
   const {app_id, app_key} = queryStrings
   try {
    const data = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`)
    console.log("data",data);
    return data;
   } catch (error) {
      console.log(error)
   }
  });


export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(recipeItems.fulfilled, (state, action) => {
        console.log(action.payload)
        console.log(state)
      state.items = action.payload.data.hits; // Assuming you want to set the payload directly as items.
    });
  },
});

export const itemReducer = itemSlice.reducer;
export const itemSelector = (state) => state.itemReducer;
