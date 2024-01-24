import { Reducer } from "react";
import { SET__TOKEN, SET__TOKEN__ERROR, SET__TOKEN__SUCCESS, SetTokenSuccessAction, SetTokenAction, SetTokenErrortAction } from "./saveToken";

export type meStateToken = {
    loading: boolean;
    error: string;
    token: string;
}

type meActions = SetTokenAction
    | SetTokenSuccessAction
    | SetTokenErrortAction;

export const reducerToken: Reducer<meStateToken, meActions> = (state, action) => {
    switch (action.type) {
        case SET__TOKEN:
            return {
                ...state,
                loading: true
            };
        case SET__TOKEN__ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case SET__TOKEN__SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false
            };
        default:
            return state
    }
}