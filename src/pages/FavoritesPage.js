// src/pages/FavoritesPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="favorites-page">
      <h1>Favorites</h1>
      {favorites.length === 0 && <p>No favorite articles yet.</p>}
      {favorites.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default FavoritesPage;
