import {ISetUserReposRequest, SET_USER_REPOS_REQUEST, UserRepos } from "./types";
import { call, put, takeLatest, all } from "redux-saga/effects"
import { api } from "../../../utils/api";
import {AxiosResponse} from "axios";
import { setUserReposSuccess, setUserReposFailure } from "./actions";


function* getUserReposRequest(action: ISetUserReposRequest) {
    try {
        const { data }: AxiosResponse<UserRepos[]> = yield call(api.get, `/users/${action.payload.username}/repos`)
        yield put(setUserReposSuccess(data))
    } catch (err) {
        yield put(setUserReposFailure())
    }
}

export default all([
    takeLatest(SET_USER_REPOS_REQUEST, getUserReposRequest)
])