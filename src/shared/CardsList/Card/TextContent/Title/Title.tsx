import React, { useContext, useState } from "react";
import styles from './title.css'
import { cardContext } from "../../CardContext";
import { Link } from "react-router-dom";



export function Title() {
    const { title, id } = useContext(cardContext)

    return (
        <h2 className={styles.title}>
            <Link to={`/posts/${id}`} className={styles.postLink}>
                {title}
            </Link>
           
        </h2>
    )
}