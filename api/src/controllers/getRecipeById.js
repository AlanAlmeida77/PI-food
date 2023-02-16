const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env;

const getRecipeById = async (req, res, next) => {
  const { idRecipe } = req.params; // Obtiene el ID de la receta del parámetro de la URL

try {
    const maxRecipes = Math.min(100, req.query.maxRecipes || 100); // Obtiene el parámetro maxRecipes de la consulta (query) y lo limita a 100
    const response = await axios.get( // Hace una llamada a la API de Spoonacular con el ID de la receta y el API Key
    `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}&maxRecipes=${maxRecipes}`
    );

    const apiRecipe = response.data; // Obtiene los datos de la receta de la API

    const recipe = { // Crea un objeto con la información de la receta que se va a enviar como respuesta
      id: apiRecipe.id, // ID de la receta
      name: apiRecipe.title, // Nombre de la receta
      summary: apiRecipe.summary, // Resumen de la receta
      healthScore: apiRecipe.healthScore, // Puntuación de salud de la receta
      instructions: apiRecipe.analyzedInstructions // Instrucciones de la receta
        .map((instruction) => instruction.steps)
        .flat()
        .map((step) => step.step)
        .join('\n'),
      image: apiRecipe.image, // URL de la imagen de la receta
      diets: apiRecipe.diets.map((diet) => ({ // Tipos de dieta asociados a la receta
        name: diet,
    })),
    };

    res.status(200).json(recipe); // Envía la información de la receta como respuesta en formato JSON
} catch (error) {
    next(error); // Si hay un error, pasa el control al siguiente middleware (manejador de errores)
}
};

module.exports = getRecipeById; // Exporta el controlador para ser utilizado en la aplicación