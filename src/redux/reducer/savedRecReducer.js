import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    savedItems:[]
}

// Load saved items from local storage when the app initializes
// Modify the loadSavedItemsFromLocalStorage function
export const loadSavedItemsFromLocalStorage = () => (dispatch) => {
  try {
    const savedItems = JSON.parse(localStorage.getItem("savedItems") || "[]");
    // Dispatch an action to load the saved items into your Redux store
    dispatch(savedActions.LOAD_FROM_LOCAL_STORAGE(savedItems));
  } catch (error) {
    console.error("Error loading data from localStorage:", error);
  }
};


// console.log(localStorage.getItem("savedItems"));

// console.log("initialState",initialState);

const savedSlice = createSlice({
    name: "savedItems",
    initialState,
    reducers: {
      ADD: (state, action) => {
        const itemToSave = action.payload;
  
        // Check if an item with the same URI exists in the savedItems array
        const existingItemIndex = state.savedItems.findIndex(
          (item) => item.recipe.uri === itemToSave.recipe.uri
        );
        
         // If not found, add the item to the savedItems array
        if (existingItemIndex === -1) {
          state.savedItems.push(itemToSave);
           // Update local storage when adding an item
        localStorage.setItem("savedItems", JSON.stringify(state.savedItems));
        } else {
          // If found, you can handle this situation, such as displaying an error message.
          console.log("Item already exists in saved items.");
        }
      },
      REMOVE: (state, action) => {
        const itemToRemove = action.payload;
        const itemIndex = state.savedItems.findIndex(
          (item) => item.recipe.uri === itemToRemove.recipe.uri
        );
        if (itemIndex !== -1) {
          state.savedItems.splice(itemIndex, 1);
          // Update local storage when removing an item
          localStorage.setItem("savedItems", JSON.stringify(state.savedItems));
        }
      },
      LOAD_FROM_LOCAL_STORAGE: (state, action) => {
      state.savedItems = action.payload;
      console.log("LOADFROMLOCALSTORAGE", action.payload);
    },
    
    },
  });
  

export const savedReducer = savedSlice.reducer;
export const savedActions = savedSlice.actions;
export const savedSelector = (state)=> state.savedReducer;