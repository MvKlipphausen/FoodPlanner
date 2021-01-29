const
    router = require('express').Router(),
    homeController = require('../controllers/home.controller'),
    recipesController = require('../controllers/recipes.controller'),
    recipesService = require('../services/recipes.service');


//routes
router.get('/', homeController.renderHome);
router.get('/home', homeController.renderHome);

router.get('/recipes', recipesController.renderRecipes);
router.post('/recipes', recipesService.addRecipe);

router.get('/data', recipesService.getRecipes);

module.exports = router;