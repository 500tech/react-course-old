import * as actions from '../consts/action-types';

export const addRecipe = (title, favorite = false) => ({
  type: actions.ADD_RECIPE,
  title: title.trim(),
  favorite
});

export const toggleFavorite = (id) => ({
  type: actions.TOGGLE_FAVORITE,
  id
});