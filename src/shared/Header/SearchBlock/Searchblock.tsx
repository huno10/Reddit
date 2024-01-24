import React, { useEffect } from "react";
import styles from './searchblock.css'
import { UserBlock } from "./UserBlock/UserBlock";
import { useUserData } from "../../../hooks/useUserData";
import { useDispatch } from "react-redux";
import { saveToken } from "../../Token/saveToken";
import { useNavigate } from "react-router-dom";


export function SearchBlock() {
    const dispatch = useDispatch();

    const navigate = useNavigate()

    useEffect(() => {
        if (window.location.pathname === "/auth") {
            const code = new URLSearchParams(window.location.search).get("code")
            //@ts-ignore
            dispatch(saveToken(code))
            navigate("/posts/")
        }
    }, [])

    const { data, loading } = useUserData()
    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading} />
        </div>
    )
}