const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecipeById = require('../controllers/getRecipeById');
const getRecipeByName = require('../controllers/getRecipeByName');
const postRecipe = require('../controllers/postRecipe');
const getDiets = require('../controllers/getDiets');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/name', getRecipeByName);
router.get('/recipes/:idRecipe', getRecipeById);
router.post('/recipes', postRecipe);
router.get('/diets', getDiets);

module.exports = router;
