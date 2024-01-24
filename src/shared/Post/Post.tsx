import React, { useContext, useEffect, useRef } from "react"
import styles from './post.css'
import ReactDom from 'react-dom'
import { CommentFormContainer } from "../CommentFormContainer/CommentFormContainer";
import { cardContext } from "../CardsList/Card/CardContext";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IPostData } from "../../hooks/usePostsData";

interface IPost {
    onClose?: () => void;
}

export function Post(props: IPost) {
    const { id } = useParams<{ id: string }>();

    const posts = useSelector<RootState, IPostData[]>(state => state.getPosts)
    const filteredPosts = posts.filter(post => post.id === id)

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.();
            }
        }
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, []);

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDom.createPortal((
        <div className={styles.modal} ref={ref}>
            {filteredPosts.length !== 0 && filteredPosts[0] && filteredPosts[0].title ? (
                <h2>{filteredPosts[0].title}</h2>
            ) : (
                <p>No title available</p>
            )}
            <div className={styles.content}>
                <p>есть над чем задуматьсяЖ есть над чем задуматься</p>
                <p>есть над чем задуматьсяЖ есть над чем задуматься</p>
                <p>есть над чем задуматьсяЖ есть над чем задуматься</p>
            </div>
            <CommentFormContainer />
        </div>
    ), node);
}