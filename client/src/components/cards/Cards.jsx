import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../redux/actions.js';
import styles from './card.module.css';

const Cards = ({ recipes, fetchRecipes }) => {
  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  return (
    <div className={styles.container}>
    {recipes.map((recipe) => (
      <div key={recipe.id} className={styles.card}>
        <img src={recipe.image} alt={recipe.title} className={styles.image} />
        <h3 className={styles.title}>{recipe.title}</h3>
        <p className={styles.diets}>{recipe.diets.join(', ')}</p>
      </div>
    ))}
  </div>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);