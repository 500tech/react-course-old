import * as actions from '../consts/action-types';

export const addRecipe = (title, description, favorite = false) => ({
  type: actions.ADD_RECIPE,
  title: title.trim(),
  description: description.trim(),
  favorite
});

export const toggleFavorite = (id) => ({
  type: actions.TOGGLE_FAVORITE,
  id
});

export const fetchRecipes = () => ({
  type: actions.API,
  payload: {
    url: 'recipes.json',
    success: actions.SET_RECIPES
  }
});