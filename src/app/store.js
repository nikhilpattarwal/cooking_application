import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { itemReducer } from '../redux/reducer/recepieReducer';
import { savedReducer } from '../redux/reducer/savedRecReducer';

const rootReducer = combineReducers({itemReducer,savedReducer})

export const store = configureStore({
  reducer:rootReducer
});
