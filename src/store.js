import { createStore } from 'redux';
import rootReducer from './reducers/root';

const store = createStore(rootReducer);

window.store = store;

export default store;