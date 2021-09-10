import { UserReposActionTypes, SET_USER_REPOS_REQUEST, SET_USER_REPOS_REQUEST_SUCCESS, SET_USER_RESPOS_REQUEST_FAILURE, UserRepos } from "./types"

export function setUserReposRequest(username: string): UserReposActionTypes {
    return {
        type: SET_USER_REPOS_REQUEST,
        payload: { username }
    }
}

export function setUserReposSuccess(repos: UserRepos[]): UserReposActionTypes {
    return {
        type: SET_USER_REPOS_REQUEST_SUCCESS,
        payload: { repos }
    }
}

export function setUserReposFailure(): UserReposActionTypes {
    return {
        type: SET_USER_RESPOS_REQUEST_FAILURE,
        payload: {}
    }
}