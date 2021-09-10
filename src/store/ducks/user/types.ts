// Action Requests
export const SET_USER_REQUEST = "user/SET_USER_REQUEST";

export interface ISetUserRequest {
    type: typeof SET_USER_REQUEST;
    payload: { username: string };
}

// Actions Setters
export const SET_USER_REQUEST_SUCCESS = "user/SET_USER_REQUEST_SUCCESS";
export const SET_USER_REQUEST_FAILURE = "user/SET_USER_REQUEST_FAILURE";

export interface ISetUserRequestSuccess {
    type: typeof SET_USER_REQUEST_SUCCESS;
    payload: { username: string };
}

export interface ISetUserRequestFailure {
    type: typeof SET_USER_REQUEST_FAILURE;
    payload: { };
}

export type UserActionTypes =
    ISetUserRequest |
    ISetUserRequestSuccess |
    ISetUserRequestFailure;
