import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import AppNavigation from './navigation/AppNavigation';

import childReducer from './store/reducer/child';
// import {init} from './helper/db';

// init()
//   .then(() => {
//     console.log('Initialized database');
//   })
//   .catch(err => {
//     console.log('Initializing db failed');
//     console.log(err);
//   });

const rootReducer = combineReducers({
  child: childReducer,
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
