// src/utils/api.js
import axios from 'axios';

const API_KEY = '66b0ffc792794fe3989e62a3b64c0a2d';
const BASE_URL = 'https://newsapi.org/v2/';

export const fetchArticles = async (category = 'general', page = 1, query = '') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category,
        page,
        q: query,
       apiKey: API_KEY,
        pageSize: 10,
        language: 'en'
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};



