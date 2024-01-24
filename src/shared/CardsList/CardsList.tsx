import React, { useContext, useRef } from "react";
import styles from './cardslist.css'
import { Card } from "./Card/Card"
import { postsContext } from "../context/postsContext";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IPostData } from "../../hooks/usePostsData";



export function CardsList() {
    const { loading, errorLoading, bottomOfList, buttonLoading, hendlerLoader } = useContext(postsContext)
    const post = useSelector<RootState, IPostData[]>(state => state.getPosts)

    const handleButtonClick = () => {
        hendlerLoader();
    };

    return (
        <>
            <ul className={styles.cardslist}>
                {/* {post.length === 0 && !loading && !errorLoading && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100px',
                        fontSize: '20px'
                    }}
                    >Для получения постов активируйтесь</div>
                )} */}

                {post.map(post => (
                    <Card key={post.id} post={post} />
                ))}

                <div ref={bottomOfList} />

                {loading && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100px',
                        fontSize: '20px'
                    }}>Загружаются посты...</div>
                )}

                {errorLoading && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100px',
                        fontSize: '20px'
                    }}>Ошибка загрузки...</div>
                )}

                {buttonLoading && (
                    <button className={styles.button} onClick={handleButtonClick} >
                        Загрузить еще
                    </button>
                )}


            </ul>
            <Outlet />
        </>
    )
}