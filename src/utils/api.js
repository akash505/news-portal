// src/utils/api.js
import axios from 'axios';

const API_KEY = '66b0ffc792794fe3989e62a3b64c0a2d';
const BASE_URL = 'https://newsapi.org/v2';

// Optional: Use a CORS proxy for testing
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

export const fetchArticles = async (category = 'general', page = 1, query = '') => {
  try {
    console.log('Fetching articles with:', { category, page, query });
    const response = await axios.get(`${CORS_PROXY}${BASE_URL}/top-headlines`, {
      params: {
        category,
        page,
        q: query,
        apiKey: API_KEY,
        pageSize: 10,
        language: 'en'
      },
    });
    console.log('Articles fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    if (error.response) {
      console.error('Response error data:', error.response.data);
      console.error('Response error status:', error.response.status);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};
