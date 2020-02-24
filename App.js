import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import AppNavigation from './navigation/AppNavigation';

import childReducer from './store/reducer/child';
import vaccineReducer from './store/reducer/vaccine';
import {init, dropChldRecordsTable} from './helper/db';

init()
  .then(() => {
    console.log('Initialized database');
    // dropChldRecordsTable().then(() => console.log('table droped'));
  })
  .catch(err => {
    console.log('Initializing db failed');
    console.log(err);
  });

const rootReducer = combineReducers({
  child: childReducer,
  vaccine: vaccineReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
