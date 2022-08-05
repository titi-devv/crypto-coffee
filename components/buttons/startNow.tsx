import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/components/startButton.module.css'


const StartNow: NextPage = () => {
    return (
        <div className={`${styles.container} ${styles.startNow}`}>
            <div className={styles.text}>Start now <span className={styles.regular}>- It's 100% free</span></div>
        </div>
    )
}

export default StartNow
