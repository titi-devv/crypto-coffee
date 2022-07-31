import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/components/signup.module.css'


const Signup: NextPage = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Sign up</p>
        </div>
    )
}

export default Signup
