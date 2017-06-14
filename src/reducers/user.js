import { TOGGLE, ADD_RECIPE, SET_NAME } from '../consts/action-types';

const initialValue = {
  name: 'Kipi'
};

const reducer = (user = initialValue, action) => {
  switch (action.type) {
    case SET_NAME:
      return Object.assign({}, user, {
        name: action.name
      });

    default:
      return user;
  }
};

export default reducer;