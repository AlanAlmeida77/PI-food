import { FETCH_RECIPES_REQUEST, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE } from './actions-types';
import axios from 'axios'

export const fetchRecipes = (query) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_RECIPES_REQUEST' });
    return axios
      .get(`https://api.spoonacular.com/recipes/complexSearch?${query}&addRecipeInformation=true&number=100`)
      .then((response) => {
        const recipes = response.data.results;
        dispatch({
          type: 'FETCH_RECIPES_SUCCESS',
          payload: recipes,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_RECIPES_FAILURE',
          payload: error.message,
        });
      });
  };
};

export const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST,
});

export const fetchRecipesSuccess = (recipes) => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes,
});

export const fetchRecipesFailure = (error) => ({
  type: FETCH_RECIPES_FAILURE,
  payload: error,
});