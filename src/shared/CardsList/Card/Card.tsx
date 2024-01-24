import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from './card.css'
import { TextContent } from "./TextContent/TextContent"
import { Preview } from "./Preview/Preview"
import { Menu } from "./Menu/Menu"
import { Controls } from "./Controls/Сontrols"
import { IPostData } from "../../../hooks/usePostsData";
import { cardContext } from "./CardContext";
import { PostCommentsContextProvider } from "../../context/postCommentsContext";




export function Card({ post }: { post: IPostData }) {

    return (
        <cardContext.Provider value={post}>
            <PostCommentsContextProvider postId={post.id} >
                <li className={styles.card}>
                    <TextContent />
                    <Preview />
                    <Menu />
                    <Controls />
                </li>
            </PostCommentsContextProvider>
        </cardContext.Provider>
    )
}