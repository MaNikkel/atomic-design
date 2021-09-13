import {
    SET_USER_REPOS_REQUEST,
    SET_USER_REPOS_REQUEST_SUCCESS,
    SET_USER_RESPOS_REQUEST_FAILURE,
    UserRepos,
    UserReposActionTypes
} from "./types";


export interface IUserReposState {
    repos: UserRepos[],
    failure: boolean,
    loading: boolean
}

const INITIAL_STATE: IUserReposState = {
    repos: [],
    failure: false,
    loading: false
}

export default function userReducer(state = INITIAL_STATE, action: UserReposActionTypes): IUserReposState {
    switch(action.type) {
        case SET_USER_REPOS_REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                failure: false,
                repos: action.payload.repos
            }
        }

        case SET_USER_RESPOS_REQUEST_FAILURE: {
            return {
                ...state,
                loading: false,
                failure: true,
                repos: []
            }
        }

        case SET_USER_REPOS_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        default: {
            return state;

        }
    }
}