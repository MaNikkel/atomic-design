import {ISetUserRequest, SET_USER_REQUEST } from "./types";
import { call, put, takeLatest, all } from "redux-saga/effects"
import { api } from "../../../utils/api";
import {AxiosResponse} from "axios";
import { setUserFailure, setUserSuccess } from "./actions";
import {setUserReposFailure, setUserReposRequest} from "../repos";


function* getUserRequest(action: ISetUserRequest) {
    try {
        const { data }: AxiosResponse<{login: string}> = yield call(api.get, `/users/${action.payload.username}`)
        yield put(setUserSuccess(data.login))
        yield put(setUserReposRequest(data.login))
    } catch (err) {
        yield put(setUserFailure())
        yield put(setUserReposFailure())
    }
}

export default all([
    takeLatest(SET_USER_REQUEST, getUserRequest)
])