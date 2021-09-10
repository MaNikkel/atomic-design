import {SET_USER_REQUEST, SET_USER_REQUEST_FAILURE, SET_USER_REQUEST_SUCCESS, UserActionTypes} from "./types"

export function setUserRequest(username: string): UserActionTypes {
    return {
        type: SET_USER_REQUEST,
        payload: { username }
    }
}

export function setUserSuccess(username: string): UserActionTypes {
    return {
        type: SET_USER_REQUEST_SUCCESS,
        payload: { username }
    }
}

export function setUserFailure(): UserActionTypes {
    return {
        type: SET_USER_REQUEST_FAILURE,
        payload: {}
    }
}