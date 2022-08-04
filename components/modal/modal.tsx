import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, MutableRefObject, useRef, useEffect } from 'react'
import styles from '../../styles/components/modal.module.css'
import { ModalContext } from '../contexts/ModalContext'
import { AiOutlineClose } from 'react-icons/ai'

const Modal: NextPage = () => {
    function capitalizeFirstLetter(string: string | undefined) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const { modalOpened, closeModal, modalProps } = useContext(ModalContext)

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
                <div className={styles.comingsoon}>COMING SOON ⌛</div>
                <button className={styles.close} onClick={closeModal}><AiOutlineClose size={20} color={'#ccc'} /></button>
                <div className={styles.user}>{capitalizeFirstLetter(modalProps?.name)},</div>
                <div className={styles.description}>Join us before the launch and get an &nbsp;<br></br>
                    <span className={styles.underline}>all time free</span> access.</div>
                <div className={styles.buttons}>

                </div>

            </div>

        </div>
    ) : null
}

export default Modal
