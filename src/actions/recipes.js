import * as actions from '../consts/action-types';

export const addRecipe = (id, title, description, favorite = false) => ({
  type: actions.ADD_RECIPE,
  payload: {
   id,
    title: title.trim(),
    description: description.trim(),
    favorite
  }
});

export const toggleFavorite = (id) => ({
  type: actions.TOGGLE_FAVORITE,
  payload: id
});

export const fetchRecipes = () => ({
  type: actions.API,
  payload: {
    url: 'recipes.json',
    success: actions.SET_RECIPES
  }
});