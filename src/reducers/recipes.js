import { ADD_RECIPE, TOGGLE_FAVORITE, SET_RECIPES } from '../consts/action-types';

const initialState = [];

const reducer = (recipes = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return recipes.concat(action.payload);

    case TOGGLE_FAVORITE:
      return recipes.map(recipe =>
        recipe.id !== action.payload
          ? recipe
          : Object.assign({}, recipe, {
          favorite: !recipe.favorite
        })
      );

    case SET_RECIPES:
      return action.payload;

    default:
      return recipes;
  }
};

export default reducer;