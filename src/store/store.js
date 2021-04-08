import { createStore, applyMiddleware} from "redux";
import rootReducer from "./reducer";
import apartmentReducer from "./reducer/apartmentReducer";
import createSagaMiddleware from 'redux-saga';
import {logger } from 'redux-logger';
import rootSaga from './../saga/index'

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(apartmentReducer, applyMiddleware(sagaMiddleware, logger));
// sagaMiddleware.run()

const configureStore = () => {
    const enhancers = applyMiddleware (sagaMiddleware);
    const store = createStore(apartmentReducer,enhancers)
    sagaMiddleware.run(rootSaga);
    return store
}


export default configureStore;