import React from "react";
import { SearchBlock } from "./SearchBlock/Searchblock";
import { ThreadTitle } from "./ThreadTitle/Threadtitle";
import { SortBlock } from "./SortBlock/Sortblock";
import styles from './header.css'



export function Header() {
    return (
        <header className={styles.header}>
            <SearchBlock />
            <ThreadTitle />
            <SortBlock />
        </header>
    )
}