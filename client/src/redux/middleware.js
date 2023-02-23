import axios from 'axios';

const spoonacularApiKeyMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type === 'FETCH_RECIPES_REQUEST') {
    axios
      .get('/api/key')
      .then((response) => {
        const apiKey = response.data;
        axios.defaults.headers.common['X-Api-Key'] = apiKey;
        next(action);
      })
      .catch((error) => {
        console.error('Error al obtener la API_KEY:', error);
      });
  } else {
    next(action);
  }
};

export default spoonacularApiKeyMiddleware;