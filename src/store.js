import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import logMiddleware from './middleware/log';

const store = createStore(rootReducer, applyMiddleware(logMiddleware));

window.store = store;

export default store;