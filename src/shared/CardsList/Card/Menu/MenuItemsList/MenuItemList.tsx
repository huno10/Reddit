import React from "react";
import styles from './menuitemslist.css'
import { BlockIcon } from "../../../../../icons/BlockIcon";
import { EColor, Text } from "../../../../Text/Text";
import { WarningIcon } from "../../../../../icons/WarningIcon";
import { CommentIcon } from "../../../../../icons/CommentIcon";
import { ShareIcon } from "../../../../../icons/ShareIcon";
import { SaveIcon } from "../../../../../icons/SaveIcon";



interface IMenuItemsListProps {
    postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
    return (
        <ul className={styles.menuItemsList}>

            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <CommentIcon />
                <Text size={12} color={EColor.grey99}>
                    Комментарии
                </Text>
            </li>2

            <div className={styles.divider} />

            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <ShareIcon />
                <Text size={12} color={EColor.grey99}>
                    Поделиться
                </Text>
            </li>

            <div className={styles.divider} />

            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <BlockIcon />
                <Text size={12} color={EColor.grey99}>
                    Скрыть
                </Text>
            </li>

            <div className={styles.divider} />

            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <SaveIcon />
                <Text size={12} color={EColor.grey99}>
                    Сохранить
                </Text>
            </li>

            <div className={styles.divider} />

            <li className={styles.menuItem} onClick={() => console.log(postId)}>
                <WarningIcon />
                <Text size={12} color={EColor.grey99}>
                    Пожаловаться
                </Text>
            </li>

        </ul>
    )
}

