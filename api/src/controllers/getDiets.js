const axios = require('axios');
const { Diet } = require('../db');

const getDiets = async (req, res) => {
try {
    let diets = await Diet.findAll();
    if (diets.length === 0) { // si no hay dietas en la base de datos, las obtengo de la API y las guardo
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=100`);
    const results = response.data.results;
    const dietsArray = results.reduce((acc, result) => {
        result.diets.forEach((diet) => {
          if (!acc.includes(diet)) acc.push(diet); // evito duplicados
        });
        return acc;
    }, []);
    const createdDiets = await Promise.all(dietsArray.map((diet) => {
        return Diet.create({ name: diet });
    }));
    diets = createdDiets;
    }
    res.json(diets);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = getDiets;