import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, MutableRefObject, useRef } from 'react'
import styles from '../../styles/components/modal.module.css'
import { ModalContext } from '../contexts/ModalContext'


const Modal: NextPage = () => {
    const { modalOpened, closeModal, modalProps, openModal } = useContext(ModalContext)
    // const modalRef: MutableRefObject<any> = useRef()
    // const handleClick = (e: { target: any }) => {
    //     if (modalRef.current && modalRef.current.contains(e.target)) {
    //         // inside click
    //         return
    //     } else {
    //         closeModal()
    //     }
    // }
    return modalOpened ? (
        <div className={styles.container} >
            <div className={styles.modal}>

                this is my modal
            </div>
            <button className={styles.close} onClick={closeModal}>close</button>

        </div>
    ) : null
}

export default Modal
