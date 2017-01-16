import * as actions from '../consts/action-types';
import { getID } from '../lib/ids';

const reducer = (state, action) => {
  console.log("Got Action " + action.type, action);

  switch (action.type) {
    case actions.ADD_RECIPE:
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false,
        description: action.description
      };

      const newRecipes = state.recipes.concat(newRecipe);

      return Object.assign({}, state, {
        recipes: newRecipes
      });

    case actions.TOGGLE_FAVORITE:
      const updateRecipes = state.recipes.map(recipe =>
        recipe.id !== action.id
          ? recipe
          : Object.assign({}, recipe, {
          favorite: !recipe.favorite
        })
      );

      return Object.assign({}, state, {
        recipes: updateRecipes
      });

    default:
      return state;
  }
};

export default reducer;