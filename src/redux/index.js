import { combineReducers } from 'redux';

import recipientReducer from './recipient/reducer';

// * by using one central index file all of the reducers can get imported
// * here and combineReducers only has to be called once
// * this can also help to keep all your reducers in one place and easy to track down

export default combineReducers({
  recipient: recipientReducer,
});
