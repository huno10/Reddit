import React from 'react';
import styles from './userblock.css';
import { AnonIcon } from '../../../../icons/AnonIcon';
import { EColor, Text } from '../../../Text/Text';
import { Break } from '../../../Break/Break';



interface IUserBlock {
    avatarSrc?: string;
    username?: string;
    loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlock) {
    return (
        <a href='https://www.reddit.com/api/v1/authorize?client_id=pBMPpIsI7x2lvSaK3Ngqhg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
            className={styles.userBox}>
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImage} />
                    : <AnonIcon />}
            </div>
            <div className={styles.username}>
                <Break size={12} />
                {loading
                    ? <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Загрузка'}</Text>
                    : <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>}
                
            </div>
        </a>
    )
}