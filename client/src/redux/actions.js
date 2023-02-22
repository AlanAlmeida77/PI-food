import axios from 'axios';
import {
  DIETS_REQUEST,
  DIETS_SUCCESS,
  DIETS_FAILURE,
  RECIPES_BY_NAME_REQUEST,
  RECIPES_BY_NAME_SUCCESS,
  RECIPES_BY_NAME_FAILURE,
  RECIPE_BY_ID_REQUEST,
  RECIPE_BY_ID_SUCCESS,
  RECIPE_BY_ID_FAILURE,
  ADD_RECIPE_REQUEST,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
} from './actions-types';

// Acción para obtener las dietas
export const fetchDiets = () => async (dispatch) => {
  dispatch({ type: DIETS_REQUEST });

  try {
    const { data } = await axios.get('/diets');
    dispatch({ type: DIETS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DIETS_FAILURE, payload: error.message });
  }
};

// Acción para obtener recetas por nombre
export const fetchRecipesByName = (name) => async (dispatch) => {
  dispatch({ type: RECIPES_BY_NAME_REQUEST });

  try {
    const { data } = await axios.get(`/recipes?name=${name}`);
    dispatch({ type: RECIPES_BY_NAME_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: RECIPES_BY_NAME_FAILURE, payload: error.message });
  }
};

// Acción para obtener una receta por id
export const fetchRecipeById = (id) => async (dispatch) => {
  dispatch({ type: RECIPE_BY_ID_REQUEST });

  try {
    const { data } = await axios.get(`/recipes/${id}`);
    dispatch({ type: RECIPE_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: RECIPE_BY_ID_FAILURE, payload: error.message });
  }
};

// Acción para agregar una nueva receta
export const addRecipe = (recipe) => async (dispatch) => {
  dispatch({ type: ADD_RECIPE_REQUEST });

  try {
    const { data } = await axios.post('/recipes', recipe);
    dispatch({ type: ADD_RECIPE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_RECIPE_FAILURE, payload: error.message });
  }
};