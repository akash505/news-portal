// src/redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadFavorites = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavorites(),
  reducers: {
    addFavorite: (state, action) => {
      const newState = [...state, action.payload];
      saveFavorites(newState);
      return newState;
    },
    removeFavorite: (state, action) => {
      const newState = state.filter((article) => article.url !== action.payload.url);
      saveFavorites(newState);
      return newState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
