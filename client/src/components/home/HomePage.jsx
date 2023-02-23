import React from 'react';
import styles from './homePage.module.css';
import Cards from '../cards/Cards';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <input type="text" placeholder="Search recipes by name" />
            <button type="submit">Search</button>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <Cards />
      </div>
    </div>
  );
}

export default HomePage;