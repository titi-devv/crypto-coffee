import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, MutableRefObject, useRef, useEffect } from 'react'
import styles from '../../styles/components/modal.module.css'
import { ModalContext } from '../contexts/ModalContext'


const Modal: NextPage = () => {
    const { modalOpened, closeModal, modalProps, openModal } = useContext(ModalContext)

    const modalRef: MutableRefObject<any> = useRef()
    const handleClick = (e: { target: any }) => {
        if (modalRef.current && modalRef.current.contains(e.target)) {
            // inside click

        } else {
            closeModal()
        }
    }
    useEffect(() => {
        // add when mounted
        document.addEventListener('mousedown', handleClick)
        // return function to be called when unmounted
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [])

    return modalOpened ? (
        <div className={styles.container} >
            <div className={styles.modal} ref={modalRef}>

                this is my modal
            </div>
            <button className={styles.close} onClick={closeModal}>close</button>

        </div>
    ) : null
}

export default Modal
