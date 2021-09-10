// Action Requests
export const SET_USER_REPOS_REQUEST = "user/SET_USER_REPOS_REQUEST";

export interface ISetUserReposRequest {
    type: typeof SET_USER_REPOS_REQUEST;
    payload: { username: string };
}

// Actions Setters
export const SET_USER_REPOS_REQUEST_SUCCESS = "user/SET_USER_REPOS_REQUEST_SUCCESS";
export const SET_USER_RESPOS_REQUEST_FAILURE = "user/SET_USER_RESPOS_REQUEST_FAILURE";

export type UserRepos = {
    id: string;
    full_name: string;
    html_url: string;
}

export interface ISetUserReposRequestSuccess {
    type: typeof SET_USER_REPOS_REQUEST_SUCCESS;
    payload: { repos: UserRepos[] };
}

export interface ISetUserReposRequestFailure {
    type: typeof SET_USER_RESPOS_REQUEST_FAILURE;
    payload: { };
}

export type UserReposActionTypes =
    ISetUserReposRequest |
    ISetUserReposRequestSuccess |
    ISetUserReposRequestFailure;
