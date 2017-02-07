import { ADD_RECIPE, TOGGLE_FAVORITE, SET_RECIPES } from '../consts/action-types';
import { getID } from '../lib/ids';

const initialState = [];

const reducer = (recipes = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false,
        description: action.description
      };

      return recipes.concat(newRecipe);

    case TOGGLE_FAVORITE:
      return recipes.map(recipe =>
        recipe.id !== action.id
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