const { Recipe } = require('../models/Recipe');
const { Op } = require('sequelize');
const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env;
const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100&query=`;

const getRecipeByName = async (req, res, next) => {
    const { name } = req.query;

    try {
    let apiRecipes = [];
    let dbRecipes = [];

    // Buscar recetas en la API
    const apiResponse = await axios.get(API_URL + name);
    apiRecipes = apiResponse.data.results;

    if (apiRecipes.length === 0) {
      // Buscar recetas en la base de datos
        dbRecipes = await Recipe.findAll({
        where: {
            name: {
            [Op.iLike]: `%${name}%`
            }
        }
        });
    }

    // Combinar los resultados
    const allRecipes = [...apiRecipes, ...dbRecipes];

    if (allRecipes.length === 0) {
        res.status(404).send('No se encontraron recetas con ese nombre.');
    } else {
        res.json(allRecipes);
    }
    } catch (err) {
    next(err);
    }
};

module.exports = getRecipeByName;