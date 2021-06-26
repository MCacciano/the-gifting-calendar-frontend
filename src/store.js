import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import recipient from './redux/reducers/recipient';

// const rootReducer = combineReducers({
//   recipient
// })

// * combineReducers is being exported by default from
// * the redux/index.js so it just gets imported directly here

import rootReducer from './redux';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
