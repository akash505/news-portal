// src/redux/articlesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../utils/api';

export const getArticles = createAsyncThunk('articles/getArticles', async ({ category, page, query }) => {
  const data = await fetchArticles(category, page, query);
  return data;
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    category: 'general',
    page: 1,
    query: '',
    totalResults: 0,
    status: 'idle',
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage, setQuery } = articlesSlice.actions;
export default articlesSlice.reducer;
