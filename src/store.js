import { getID } from './lib/ids';
import { createStore } from 'redux';
import rootReducer from './reducers/root';

const initialState = {
  recipes: [
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
  ]
};

const store = createStore(rootReducer, initialState);

window.store = store;

export default store;