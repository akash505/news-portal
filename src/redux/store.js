import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articlesSlice';
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    favorites: favoritesReducer,
  },
});
