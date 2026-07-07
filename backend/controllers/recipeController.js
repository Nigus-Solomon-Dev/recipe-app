const Recipe = require('../models/Recipe');

//get all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//create recipe
const createRecipe=async(req,res)=>{
 
  
  try{
    const recipe=new Recipe({...req.body,userId:req.user.id});
    await recipe.save();
    res.status(201).json({ message: 'Recipe created!', recipe });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//get recipe by id
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ _id: req.params.id, userId: req.user.id });
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//update recipe
const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json({ message: 'Recipe updated!', recipe });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe
};