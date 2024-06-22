import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles, setCategory, setPage } from '../redux/articlesSlice';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import '../components/CategoryFilter.css'


const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, category, page, query, totalResults, status, error } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticles({ category, page, query }));
  }, [dispatch, category, page, query]);

  return (
    <div className="homepage">    
      <SearchBar />
      <CategoryFilter onChange={(category) => dispatch(setCategory(category))} />
      {status === 'loading' && <p className="loader">Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && articles.map((article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
      <Pagination
        currentPage={page}
        totalResults={totalResults}
        onPageChange={(page) => dispatch(setPage(page))}
      />
    </div>
  );
};

export default HomePage;
