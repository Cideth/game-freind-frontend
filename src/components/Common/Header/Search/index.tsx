import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <input type='search' />
      <button type='button'>검색</button>
    </div>
  );
};

export default Search;
