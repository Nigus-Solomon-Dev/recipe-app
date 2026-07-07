'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createRecipe } from '@/utils/api';
import { ArrowLeft, Plus, X } from 'lucide-react';

export default function AddRecipe() {
 const router=useRouter();
 const [formData,setFormData]=useState({
  title: '',
    category: 'Lunch',
    ingredients: [],
    instructions: '',
    cookingTime: '',
    servings: '',
    image: ''
 });
  const [ingredientInput, setIngredientInput] = useState('');
   const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drink'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const addIngredient = () => {
    if (ingredientInput.trim()) {
      setFormData({
        ...formData,
        ingredients: [...formData.ingredients, ingredientInput.trim()]
      });
      setIngredientInput('');
    }
  };
 const removeIngredient = (index) => {
    setFormData({
      ...formData,
      ingredients: formData.ingredients.filter((_, i) => i !== index)
    });
  };
 const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await createRecipe({
        ...formData,
        cookingTime: parseInt(formData.cookingTime),
        servings: parseInt(formData.servings)
      });
      router.push('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create recipe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/dashboard"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </Link>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Add New Recipe
            </h1>
            <p className="text-gray-500 mt-2">Share your favorite recipe with the world</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Recipe Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800"
                placeholder="e.g., Spaghetti Bolognese"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Ingredients */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ingredients</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={ingredientInput}
                  onChange={(e) => setIngredientInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800"
                  placeholder="e.g., 500g spaghetti"
                />
                <button
                  type="button"
                  onClick={addIngredient}
                  className="bg-orange-500 text-white px-4 py-3 rounded-xl hover:bg-orange-600 transition"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Ingredient Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg text-sm flex items-center space-x-1"
                  >
                    <span>{ingredient}</span>
                    <button
                      type="button"
                      onClick={() => removeIngredient(index)}
                      className="hover:text-red-600 transition"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
              {formData.ingredients.length === 0 && (
                <p className="text-sm text-gray-400 mt-2">Add at least one ingredient</p>
              )}
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Instructions</label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800"
                placeholder="Step by step instructions..."
                required
              />
            </div>

            {/* Cooking Time & Servings */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Cooking Time (min)</label>
                <input
                  type="number"
                  name="cookingTime"
                  value={formData.cookingTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800"
                  placeholder="30"
                  min="1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Servings</label>
                <input
                  type="number"
                  name="servings"
                  value={formData.servings}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800"
                  placeholder="4"
                  min="1"
                  required
                />
              </div>
            </div>

            {/* Image URL (Optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL (Optional)</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-800"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || formData.ingredients.length === 0}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3.5 rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 font-semibold text-lg"
            >
              {loading ? 'Creating...' : 'Create Recipe'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}