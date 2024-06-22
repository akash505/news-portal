// src/components/CategoryFilter.js
import React from 'react';
import './CategoryFilter.css';

const categories = ['general', 'business', 'technology', 'entertainment'];

const CategoryFilter = ({ onChange }) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button key={category} onClick={() => onChange(category)}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
