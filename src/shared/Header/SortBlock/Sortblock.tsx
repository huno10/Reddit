import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from './sortblock.css'

export function SortBlock() {
    return (
        <div className={styles.sortBlock}>
            <input className={styles.input}
                type="text"
                placeholder="Поиск..." />
        </div>
    )
}