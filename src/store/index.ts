import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleWare from 'redux-saga';
import { all } from 'redux-saga/effects';
import {IUserState, userReducer, userSagas} from "./ducks/user";
import {IUserReposState, userReposReducer, userReposSagas} from "./ducks/repos";

export type IRootState = {
    user: IUserState,
    repos: IUserReposState
}

const rootReducer = combineReducers({
    user: userReducer,
    repos: userReposReducer
});

function* rootSaga() {
    // @ts-ignore
    return yield all([userSagas, userReposSagas])
}

const sagaMiddleware = createSagaMiddleWare();

const middlewares = [ sagaMiddleware ]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;