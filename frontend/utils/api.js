import axios from 'axios';
const API_BASE = 'https://recipe-app-backend-4sbs.onrender.com/api';
//create axios  instance
const api=axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});
//adding token to every request
api.interceptors.request.use(
  (config)=>{
    const token=localStorage.getItem('token');
    if(token){
      config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
  },(error)=>Promise.reject(error)
);
//auth functions


//register
export const register =async (userData)=>{
  const response =await api.post('/auth/register',userData);
  return response.data;
}
//login
export const login = async (userData) => {
  const response = await api.post('/auth/login', userData);
  return response.data;
};
//get all recipes
export const getRecipes = async () => {
  const response = await api.get('/recipes');
  return response.data;
};
//create recipe
export const createRecipe = async (recipeData) => {
  const response = await api.post('/recipes', recipeData);
  return response.data;
};
// Get a single recipe
export const getRecipe = async (id) => {
  const response = await api.get(`/recipes/${id}`);
  return response.data;
};
// Update a recipe
export const updateRecipe = async (id, recipeData) => {
  const response = await api.put(`/recipes/${id}`, recipeData);
  return response.data;
};

// Delete a recipe
export const deleteRecipe = async (id) => {
  const response = await api.delete(`/recipes/${id}`);
  return response.data;
};