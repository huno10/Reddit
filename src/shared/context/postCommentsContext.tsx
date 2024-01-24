import React from "react";
import { usePostsComment } from "../../hooks/usePostsComment";

export const postCommentsContext = React.createContext({});


export function PostCommentsContextProvider({ postId, children }: { postId: string, children: React.ReactNode }) {
    const [data] = usePostsComment(postId);
    return (
        <postCommentsContext.Provider value={data}>
            {children}
        </postCommentsContext.Provider>
    )
}