import React from "react";
import { usePostsComment } from "../../hooks/usePostsComment";

interface IComments {
    postId: string,
}

export function Comments({ postId }: IComments) {
    const commentsData = usePostsComment(postId);

    return (
        <div>

        </div>
    )
}