import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Interface } from 'readline'
import styles from '../../styles/components/startButton.module.css'
import Modal from '../modal/modal'
import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalContext'

const StartInput: NextPage = () => {
    // const [modalOpen, setModalOpen] = useState(false)
    const { modalOpened, closeModal, modalProps, openModal } = useContext(ModalContext)
    return (
        <button className={styles.container} onClick={() => openModal({ name: 'titi' })}>
            {modalOpened === true && <Modal />}

            <div className={styles.text}>Create my page</div>
        </button>
    )
}

export default StartInput
