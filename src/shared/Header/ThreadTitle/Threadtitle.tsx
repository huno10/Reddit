import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from './threadtitle.css'

export function ThreadTitle () {
    return (
        <h1 className={styles.threadTitle}>
            <img className={styles.img} src="https://jacobdigi.files.wordpress.com/2018/03/reddit-logo-png-transparent.png" alt="reddit" />
        </h1>
    )
}