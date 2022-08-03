import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import styles from '../../styles/components/modal.module.css'
import { ModalContext } from '../contexts/ModalContext'


const Modal: NextPage = () => {
    const { modalOpened, closeModal, modalProps, openModal } = useContext(ModalContext)
    return (
        <div className={styles.container} >
            <div className={styles.modal}>

                this is my modal
            </div>

        </div>
    )
}

export default Modal
