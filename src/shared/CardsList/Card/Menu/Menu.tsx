import * as React from "react";
import styles from './menu.css'

import { generateId } from "../../../../utils/react/generateRandomString";
import { MenuIcon } from "../../../../icons/MenuIcon";
import { CommentIcon } from "../../../../icons/CommentIcon";
import { ShareIcon } from "../../../../icons/ShareIcon";
import { SaveIcon } from "../../../../icons/SaveIcon";
import { BlockIcon } from "../../../../icons/BlockIcon";
import { WarningIcon } from "../../../../icons/WarningIcon";
import { Dropdown } from "../../../Dropdown/Dropdown";
import { GenericList } from "../../../Dropdown/GenericList/GenericList";



const LIST = [
    { As: 'li' as const, text: (<> {<CommentIcon />} Комментарии </>), className: styles.itemDropdown, onClick: () => { console.log('Комментарии clicked') } },
    { As: 'li' as const, text: (<> {<ShareIcon />} Поделиться </>), className: styles.itemDropdown },
    { As: 'li' as const, text: (<> {<BlockIcon />} Скрыть </>), className: styles.itemDropdown },
    { As: 'li' as const, text: (<> {<SaveIcon />} Сохранить </>), className: styles.itemDropdown },
    { As: 'li' as const, text: (<> {<WarningIcon />} Пожаловаться </>), className: styles.itemDropdown },
    { As: 'button' as const, text: 'Закрыть', className: styles.closeButton },
].map(generateId)

export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown
                button={
                    <button type="button" title="Нажмите" className={styles.menuButton}>
                        <MenuIcon />
                    </button>
                }
            >
                <ul className={styles.dropdown}>
                    <GenericList list={LIST}></GenericList>
                </ul>
            </Dropdown>
        </div>
    )
}

