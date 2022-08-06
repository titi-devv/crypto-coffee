import type { NextPage } from 'next'

import { useContext } from 'react'
import styles from '../../styles/components/startButton.module.css'
import { ModalContext } from '../contexts/ModalContext'


const StartNow: NextPage = () => {
    const { openModal } = useContext(ModalContext)
    return (
        <button className={`${styles.container} ${styles.startNow}`} onClick={() => openModal({})}>
            <div className={styles.text}>Start now <span className={styles.regular}>- It's 100% free</span></div>
        </button>
    )
}

export default StartNow
