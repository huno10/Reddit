import { ActionCreator, AnyAction, Reducer } from "redux";
import { MeRequestAction, MeRequestSuccesstAction, MeRequestErrortAction, ME__REQUEST, ME__REQUEST__SUCCESS, ME__REQUEST__ERROR } from "./me/actions";
import { meState, meReducer } from "./me/reducer";
import { SetTokenAction, SetTokenErrortAction, SET__TOKEN, SET__TOKEN__ERROR, SET__TOKEN__SUCCESS, SetTokenSuccessAction } from "../shared/Token/saveToken";
import { meStateToken, reducerToken } from "../shared/Token/reducerToken";
import { IPostData } from "../hooks/usePostsData";

export type RootState = {
    commentText: string;
    me: meState;
    getToken: meStateToken;
    getPosts: IPostData[];
}

const UPDATE__COMMENT = 'UPDATE__COMMENT';
type UpdateCommentAction = {
    type: typeof UPDATE__COMMENT;
    text: string;
}
export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE__COMMENT,
    text,
});

const GET__POSTS = 'GET__POSTS';
type getPostsAction = {
    type: typeof GET__POSTS;
    posts: [];
}
export const getPosts: ActionCreator<AnyAction> = (posts) => ({
    type: GET__POSTS,
    posts,
});

const initialState: RootState = {
    commentText: '',
    getToken: {
        token: '',
        loading: false,
        error: '',
    },
    me: {
        loading: false,
        error: '',
        data: {}
    },
    getPosts: []
}

type MyAction = UpdateCommentAction
    | SetTokenAction
    | SetTokenSuccessAction
    | SetTokenErrortAction
    | MeRequestAction
    | MeRequestSuccesstAction
    | MeRequestErrortAction
    | getPostsAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE__COMMENT:
            return {
                ...state,
                commentText: action.text,
            };

        case GET__POSTS:
            return {
                ...state,
                getPosts: action.posts,
            };

        case SET__TOKEN:
        case SET__TOKEN__ERROR:
        case SET__TOKEN__SUCCESS:
            return {
                ...state,
                getToken: reducerToken(state.getToken, action)
            }

        case ME__REQUEST:
        case ME__REQUEST__SUCCESS:
        case ME__REQUEST__ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            return state;
    }

}

