const
    router = require('express').Router(),
    homeController = require('../controllers/home.controller'),
    recipesController = require('../controllers/recipes.controller');


//routes
router.get('/', homeController.renderHome);
router.get('/home', homeController.renderHome);
router.get('/recipes', recipesController.renderRecipes)

module.exports = router;