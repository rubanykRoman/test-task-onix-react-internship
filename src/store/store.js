import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enchancer = applyMiddleware(thunk);

const store = createStore(rootReducer, enchancer);

export default store;
