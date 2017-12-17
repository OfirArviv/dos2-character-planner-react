import { createStore, combineReducers } from 'redux';
import buildReducer from '../reducers/buildReducer';

export default () => {
  const store = createStore(
    buildReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
