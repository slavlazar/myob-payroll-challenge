import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import localforage from 'localforage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: localforage,
  whitelist: ['Auth', 'Payslip'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
  let middleware = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
  }

  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  const persistor = persistStore(store);

  return { store, persistor };
}
