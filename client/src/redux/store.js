import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import recipesReducer from './reducer';
import spoonacularApiKeyMiddleware from './middleware';

const store = createStore(
  recipesReducer,
  applyMiddleware(thunk, spoonacularApiKeyMiddleware)
);

export default store;