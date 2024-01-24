import React, { useContext } from "react";
import styles from './userLink.css'
import { cardContext } from "../../CardContext";

export function UserLink() {
    const { avatar, author } = useContext(cardContext)

    return (
        <div className={styles.userLink}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <a href="#user-url" className={styles.username}>{author}</a>
        </div>
    )
}