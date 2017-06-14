import { TOGGLE, ADD_RECIPE, SET_NAME } from '../consts/action-types';
import { getID } from '../lib/ids';

const initialValue = [
  { id: getID(), title: 'Waffles', favorite: false },
  { id: getID(), title: 'Omelette', favorite: true },
  { id: getID(), title: 'Dog Food', favorite: true }
];

const reducer = (recipes = initialValue, action) => {
  switch (action.type) {
    case TOGGLE:
      return recipes.map(recipe => recipe.id !== action.id
        ? recipe
        : Object.assign({}, recipe, { favorite: !recipe.favorite }));

    case ADD_RECIPE:
      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };

      return recipes.concat(newRecipe);

    default:
      return recipes;
  }
};

export default reducer;