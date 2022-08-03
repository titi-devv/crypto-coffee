import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Interface } from 'readline'
import styles from '../../styles/components/startButton.module.css'


const StartInput: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>Create my page</div>
        </div>
    )
}

export default StartInput
