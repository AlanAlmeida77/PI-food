const { Recipe } = require('../models/Recipe');
const { Diet } = require ('../models/Diet.js')

const postRecipe = async (req, res, next) => {
    const { name, image, summary, healthScore, instructions, diets } = req.body;

    try {
    // Crea la receta en la base de datos
    const newRecipe = await Recipe.create({
        name,
        image,
        summary,
        healthScore,
        instructions,
    });

    // Asocia los tipos de dieta a la receta
    if (diets && diets.length) {
        const dietIds = await Diet.findAll({
        where: { name: diets },
        attributes: ['id'],
        }).map((diet) => diet.id);

        await newRecipe.setDiets(dietIds);
    }

    res.status(201).json(newRecipe);
    } catch (error) {
    next(error);
    }
};

module.exports = postRecipe;