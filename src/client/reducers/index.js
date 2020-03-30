import { combineReducers } from 'redux';

// import all reducers here
import securitiesReducer from './securitiesReducer';



// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  securities: securitiesReducer
});

// make the combined reducers available for import
export default reducers;