const renderRecipes = (req, res) => {
    res.render('recipes', {
        layout: false,
        title: 'Recipes',
        modal: 'addRecipeModal'
    });
};

module.exports = {
    renderRecipes
};
