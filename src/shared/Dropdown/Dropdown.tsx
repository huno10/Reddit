import React from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom'


interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => { };

export function Dropdown(
    { button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
    const [isDropdownOpen, setDropdownOpen] = React.useState(isOpen)

    React.useEffect(() => setDropdownOpen(isOpen), [isOpen])
    React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

    const handleOpen = () => {
        if (isOpen === undefined) {
            setDropdownOpen(!isDropdownOpen)
        }
    }

    // const dropdownRoot = document.querySelector('#dropdown_root')
    // if (!dropdownRoot) return null

    // return ReactDOM.createPortal((
    //     <div className={styles.container} >
    //         <div onClick={handleOpen}>
    //             {button}
    //         </div>
    //         {isDropdownOpen && (
    //             <div className={styles.listContainer}>
    //                 <div className={styles.list} onClick={() => setDropdownOpen(false)}>
    //                     {children}
    //                 </div>
    //             </div>
    //         )}
    //     </div>
    // ), dropdownRoot)

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
                {button}
            </div>
            {isDropdownOpen && (
                <div className={styles.listContainer}>
                    <div className={styles.list} onClick={() => setDropdownOpen(false)}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}