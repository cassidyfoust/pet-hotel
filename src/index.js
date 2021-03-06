import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import petReducer from './redux/reducers/petReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import ownerReducer from './redux/reducers/ownerReducer'
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

function* rootSaga() {
    yield takeEvery('GET_PETS', getPets);
    yield takeEvery('GET_OWNERS', getOwners);

    yield takeEvery('ADD_PET', addPet);

    yield takeEvery('NEW_OWNER', newOwner);

}

function* newOwner(action) {
    try {
        yield axios.post('/owners', action.payload);
        yield getOwners();
    } catch (error) {
        console.log('error adding new owner', error);
    }
}

function* getPets() {
    try {
        const response = yield axios.get('/pets');
        console.log('the response is:', response.data)
        yield put({ type: 'ADD_PET', payload: response.data})
    } catch (error) {
        console.log('error while getting pets', error)
    }
}

function* getOwners(){
    try {
        const response = yield axios.get('/owners');
        console.log('the response is:', response.data)
        yield put({ type: 'ADD_OWNER', payload: response.data })
    } catch (error) {
        console.log('error while getting pets', error)
    }
}

function* addPet(action) {
    try {
        console.log('the action.payload is:', action.payload)
        const response = yield axios.post('/pets', action.payload);
        console.log('the response is:', response.data)
        yield getPets()
    } catch (error) {
        console.log('error while adding pet', error)
    }
}

const storeInstance = createStore(
    combineReducers({
        petReducer,
        ownerReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

serviceWorker.unregister();

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
