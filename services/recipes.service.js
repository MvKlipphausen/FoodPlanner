const
    Recipe = require('../models/recipes.model');

const addRecipe = (req, res) => {

    let menuTypeArray = [];
    if (typeof req.body.breakfastCheck !== 'undefined') {
        menuTypeArray.push(req.body.breakfastCheck);
    }
    if (typeof req.body.lunchCheck !== 'undefined') {
        menuTypeArray.push(req.body.lunchCheck);
    }
    if (typeof req.body.dinnerCheck !== 'undefined') {
        menuTypeArray.push(req.body.dinnerCheck);
    }


    const entry = new Recipe({
        mealName: req.body.mealName,
        menuType: menuTypeArray,
        isVegetarian: Boolean(req.body.vegetarianSwitch),
        sundaySuitable: Boolean(req.body.sundaySwitch),
        isQuick: Boolean(req.body.quickSwitch),
        difficulty: req.body.flexRadioDefault
    });
    entry.save()
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while adding the contact"
            });
        });
};


const getRecipes = async (req, res) => {
    const docs = await Recipe.find({});
    res.json({'rows': docs})
    .send()
};


module.exports = {
    addRecipe,
    getRecipes
};