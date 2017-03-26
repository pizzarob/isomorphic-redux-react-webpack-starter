import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;


export default function makeStore(initialState, ...middleware) {
  try {
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default; // eslint-disable-line
        store.replaceReducer(nextRootReducer);
      });
    }
    return store;
  } catch (e) {
    return e;
  }
}
