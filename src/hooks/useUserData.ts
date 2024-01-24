import { useEffect } from "react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { IUserdata, meRequestAsync } from "../store/me/actions";



export function useUserData() {

    const token = useSelector<RootState>((state) => state.getToken.token);
    const data = useSelector<RootState, IUserdata>((state) => state.me.data)
    const loading = useSelector<RootState, boolean>((state) => state.me.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) return
        //@ts-ignore
        dispatch(meRequestAsync())
    }, [token]);
    return {
        data,
        loading
    }
}


// https://oauth.reddit.com/api/v1/me.json