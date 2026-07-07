const mongoose=require('mongoose');

const recipeSchema=mongoose.Schema({
title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drink'],
    default: 'Lunch'
  },
  ingredients: {
    type: [String],
    required: [true, 'Ingredients are required']
  },
  instructions: {
    type: String,
    required: [true, 'Instructions are required']
  },
  cookingTime: {
    type: Number,
    required: [true, 'Cooking time is required'],
    min: [1, 'Cooking time must be at least 1 minute']
  },
  servings: {
    type: Number,
    required: [true, 'Servings are required'],
    min: [1, 'Servings must be at least 1']
  },
  image: {
    type: String,
    default: ''
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);