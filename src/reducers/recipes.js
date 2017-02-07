import { ADD_RECIPE, TOGGLE_FAVORITE } from '../consts/action-types';
import { getID } from '../lib/ids';

const initialState = [
  {
    id: getID(),
    title: 'Waffles',
    description: 'Nice',
    favorite: false
  },
  {
    id: getID(),
    title: 'Omelette',
    description: 'Good',
    favorite: true
  },
  {
    id: getID(),
    title: 'Dog Food',
    description: 'Amazing',
    favorite: true
  }
];

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

    default:
      return recipes;
  }
};

export default reducer;