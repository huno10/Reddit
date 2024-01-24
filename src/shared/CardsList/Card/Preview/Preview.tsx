import React, { useContext } from "react";
import styles from './preview.css'
import { postsContext } from "../../../context/postsContext";
import { cardContext } from "../CardContext";





export function Preview() {
    const {previewImg } = useContext(cardContext)
    return (
        <div className={styles.preview}>
            <img className={styles.previewImg}
                src={previewImg}
                alt="#" />
        </div>
    )
}