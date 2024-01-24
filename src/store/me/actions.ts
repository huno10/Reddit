import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

export const ME__REQUEST = 'ME__REQUEST';
export type MeRequestAction = {
    type: typeof ME__REQUEST;
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME__REQUEST,
});

export interface IUserdata {
    name?: string;
    iconImg?: string;
}

export const ME__REQUEST__SUCCESS = 'ME__REQUEST__SUCCESS';
export type MeRequestSuccesstAction = {
    type: typeof ME__REQUEST__SUCCESS;
    data: IUserdata
}
export const meRequestSuccess: ActionCreator<MeRequestSuccesstAction> = (data: IUserdata) => ({
    type: ME__REQUEST__SUCCESS,
    data,
});


export const ME__REQUEST__ERROR = 'ME__REQUEST__ERROR';
export type MeRequestErrortAction = {
    type: typeof ME__REQUEST__ERROR;
    error: string
}
export const meRequestError: ActionCreator<MeRequestErrortAction> = (error: string) => ({
    type: ME__REQUEST__ERROR,
    error,
})


export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequest());
    axios.get('https://oauth.reddit.com/api/v1/me.json', {
        headers: { Authorization: `Bearer ${getState().getToken.token}` }
    })
        .then((resp) => {
            const userData = resp.data;
            dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.icon_img.split("?")[0] }));
        })
        .catch((error) => {
            dispatch(meRequestError(String(error)));
        });
}