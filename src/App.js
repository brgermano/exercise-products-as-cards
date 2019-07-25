import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import Home from './components/Home';
import rootReducer from './reducers';
import sagas from './sagas';

/* eslint-disable no-underscore-dangle */
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(sagas);
/* eslint-enable */
const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
export default App;
