import { Action, ActionCreator, Dispatch } from "redux";
import { RootState } from "../../store/store";
import axios from "axios";
import { ThunkAction } from "redux-thunk";

export const SET__TOKEN = 'SET__TOKEN';
export type SetTokenAction = {
    type: typeof SET__TOKEN;
}
export const setToken: ActionCreator<SetTokenAction> = () => ({
    type: SET__TOKEN,
});

//
export const SET__TOKEN__SUCCESS = 'SET__TOKEN__SUCCESS';
export type SetTokenSuccessAction = {
    type: typeof SET__TOKEN__SUCCESS;
    token: string;
}
export const setTokenSuccess: ActionCreator<SetTokenSuccessAction> = (token: string) => ({
    type: SET__TOKEN__SUCCESS,
    token,
});

//
export const SET__TOKEN__ERROR = 'SET__TOKEN__ERROR';
export type SetTokenErrortAction = {
    type: typeof SET__TOKEN__ERROR;
    error: string
}
export const setTokenError: ActionCreator<SetTokenErrortAction> = (error: string) => ({
    type: SET__TOKEN__ERROR,
    error,
});


export const saveToken = (code: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch: Dispatch) => {
    dispatch(setToken())
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`,
        {
            auth: { username: "pBMPpIsI7x2lvSaK3Ngqhg", password: 'p4C1x46oRhfeyxtoNrGKWEBdk9zMgw' },
            headers: { 'Content-type': 'application/x-www-form-urlencoded' }
        }
    )
        .then((resp) => {
            const accessToken = resp.data.access_token;
            dispatch(setTokenSuccess(accessToken));
        })
        .catch((error) => {
            dispatch(setTokenError(String(error)));
            ;
        });
}