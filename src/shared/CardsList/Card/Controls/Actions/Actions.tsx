import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from './actions.css'
import { ShareButton } from "./ShareButton/ShareButton"
import { SaveButton } from "./SaveButton/SaveButton"







export function Actions() {
    return (
        <div className={styles.actions}>
            <ShareButton />
            <SaveButton />
        </div>
    )
}