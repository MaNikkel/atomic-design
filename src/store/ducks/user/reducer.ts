import {SET_USER_REQUEST_FAILURE, SET_USER_REQUEST_SUCCESS, UserActionTypes} from "./types";


export interface IUserState {
    username: string,
    failure: boolean
}

const INITIAL_STATE: IUserState = {
    username: '',
    failure: false
}

export default function userReducer(state = INITIAL_STATE, action: UserActionTypes): IUserState {
    switch(action.type) {
        case SET_USER_REQUEST_SUCCESS: {
            return {
                ...state,
                failure: false,
                username: action.payload.username
            }
        }

        case SET_USER_REQUEST_FAILURE: {
            return {
                ...state,
                username: "",
                failure: true
            }
        }

        default: {
            return state;

        }
    }
}