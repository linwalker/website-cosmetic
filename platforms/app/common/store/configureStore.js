import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducer';

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    logger
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducer', () => {
            const nextReducer = require('../reducer');
            store.replaceReducer(nextReducer);
        })
    }

    return store 
}
