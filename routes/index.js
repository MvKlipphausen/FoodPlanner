const
    router = require('express').Router(),
    homeController = require('../controllers/home.controller');


//routes
router.get('/', homeController.renderHome);
router.get('/home', homeController.renderHome);

module.exports = router;