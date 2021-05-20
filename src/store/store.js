import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const enchancer = applyMiddleware(thunk);

const store = createStore(rootReducer, enchancer);

export default store;
