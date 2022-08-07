import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import styles from '../../styles/components/signup.module.css'
import { ModalContext } from '../contexts/ModalContext'


const Signup: NextPage = () => {
    const { openModal } = useContext(ModalContext)
    return (
        <button className={styles.container} onClick={() => openModal({})}>
            <p className={styles.text}>Join now</p>
        </button>
    )
}

export default Signup
