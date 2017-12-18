import { createStore, combineReducers } from 'redux';
import basicsReducer from '../reducers/basicsReducer';
import statisticsReducer from '../reducers/statisticsReducer';

export default () => {
  const store = createStore(
    combineReducers({
      basics: basicsReducer,
      statistics: statisticsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
