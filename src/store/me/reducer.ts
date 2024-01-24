import { Reducer } from "react";
import { MeRequestAction, MeRequestSuccesstAction, MeRequestErrortAction, ME__REQUEST, ME__REQUEST__ERROR, ME__REQUEST__SUCCESS, IUserdata } from "./actions";

export type meState = {
    loading: boolean;
    error: string;
    data: IUserdata;
}

type meActions = MeRequestAction
    | MeRequestSuccesstAction
    | MeRequestErrortAction;

export const meReducer: Reducer<meState, meActions> = (state, action) => {
    switch (action.type) {
        case ME__REQUEST:
            return {
                ...state,
                loading: true
            };
        case ME__REQUEST__ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case ME__REQUEST__SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        default:
            return state
    }
}