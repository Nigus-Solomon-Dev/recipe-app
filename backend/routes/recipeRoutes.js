const express = require('express');
const auth = require('../middleware/auth');
const {
  getRecipes,
  createRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipeController');

const router = express.Router();
router.get('/',auth,getRecipes);
router.get('/:id',auth,getRecipeById);
router.post('/',auth,createRecipe);
router.put('/:id',auth,updateRecipe);
router.delete('/:id', auth, deleteRecipe);

module.exports = router;
