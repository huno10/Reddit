import React, { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateComment } from "../../store/store";
import { CommentForm } from "../CommentForm/CommentForm";

export function CommentFormContainer() {

    const value = useSelector<RootState, string>(state => state.commentText)
    const dispatch = useDispatch();

    function handlerChange(event: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(event.target.value))
    }

    function hendlerSubmit(event: FormEvent) {
        event.preventDefault();
    }

    return (
        <CommentForm
            // value={value}
            // onChange={handlerChange}
            // onSubmit={hendlerSubmit}
        />
    )
}