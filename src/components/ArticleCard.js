// src/components/ArticleCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import './CategoryFilter.css';

const ArticleCard = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.url === article.url);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article));
    } else {
      dispatch(addFavorite(article));
    }
  };

  return (
    <div className="article-card">
      <h3>{article.title}</h3>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.description}</p>
      <button onClick={handleFavoriteClick}  className="favorite-button">
        {isFavorite ? 'Remove from Favorites' : 'Save to Favorites'}
      </button>
    </div>
  );
};

export default ArticleCard;
