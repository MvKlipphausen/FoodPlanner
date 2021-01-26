const
    mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    name: String,
    menuType: String,
    isVegetarian: Boolean,
    sundaySuitable: Boolean,
    isQuick: Boolean,
    difficulty: {
        type: String,
        enum: ['easy, medium, difficult'],
        default: 'medium'
    }    
});

module.exports = mongoose.model('Recipe', RecipeSchema);