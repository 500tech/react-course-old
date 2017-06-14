import { TOGGLE, ADD_RECIPE } from '../consts/action-types';

export const toggleFavorite = (id) => ({
  type: TOGGLE,
  id
});

export const addRecipe = (title) => ({
  type: ADD_RECIPE,
  title
});