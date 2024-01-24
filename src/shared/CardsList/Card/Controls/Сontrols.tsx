import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from './controls.css'
import { KarmaCounter } from "./KarmaCounter/KarmaCounter"
import { CommentButton } from "./CommentsButton/CommentsButton"
import { Actions } from "./Actions/Actions"






export function Controls() {
    return (
        <div className={styles.controls}>
            <KarmaCounter />
            <CommentButton />
            <Actions />
        </div>
    )
}