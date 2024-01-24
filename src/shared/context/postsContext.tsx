import React from "react";
import { IPostData, usePostsData } from "../../hooks/usePostsData";

interface PostsContextValue {
    post: IPostData[];
    loading: boolean;
    errorLoading: string;
    bottomOfList?: React.RefObject<HTMLDivElement>
    buttonLoading: boolean,
    hendlerLoader: () => void;
}

export const postsContext = React.createContext<PostsContextValue>({
    post: [],
    loading: false,
    errorLoading: "",
    buttonLoading: false,
    hendlerLoader: () => { }
});



export function PostContextProvider({ children }: { children: React.ReactNode }) {
    const data = usePostsData();
    return (
        <postsContext.Provider value={data}>
            {children}
        </postsContext.Provider>
    );
}