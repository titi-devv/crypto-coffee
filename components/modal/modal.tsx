import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, MutableRefObject, useRef, useEffect, useState } from 'react'
import styles from '../../styles/components/modal.module.css'
import { ModalContext } from '../contexts/ModalContext'
import { AiOutlineClose } from 'react-icons/ai'
import toast from 'react-hot-toast'
import Reveal from '../motion/reveal'
import splitbee from '@splitbee/web';

interface myProps {
    data_splitbee_event?: string
}
const Modal: NextPage<myProps> = (props) => {


    const { data_splitbee_event } = props
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
    const [email, setEmail] = useState('');
    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const [verifiedEmail, setVerifiedEmail] = useState(false)
    function handleState(email: string, username: string) {

        splitbee.user.set({
            username: `${username}`,
            email: `${email}`
        })
    }
    const verifyEmail = (input: string) => {
        if (!isValidEmail(input)) {

            return toast.error("Your email is invalid 😥")
        }
        else {

            handleState(input, capitalizeFirstLetter(modalProps.name))
            toast.success("Congratulation, you are in and your domain is saved !🎉")
            // TODO : add spinner
            closeModal()
        }


    }
    function handleState2() {
        splitbee.track("Verify Email Click")
    }
    useEffect(() => {
        window.addEventListener('load', handleState2)
        return () => {
            window.removeEventListener('load', handleState2)
        }
    })
    return modalOpened ? (
        <div className={styles.container} >
            <div className={styles.modal} ref={modalRef}>
                <div className={styles.comingsoon}>COMING SOON ⌛</div>
                <button className={styles.close} onClick={closeModal}><AiOutlineClose size={20} color={'#ccc'} /></button>
                <div className={styles.user}>{modalProps.name ? capitalizeFirstLetter(modalProps?.name) : 'Hey'},</div>
                <div className={styles.description}>Join us before the launch and get an &nbsp;<br></br>
                    <span className={styles.underline}>all time free</span> access.</div>
                <form className={styles.buttons}>
                    <div className={styles.emailInput}>

                        <input onChange={(e) => {

                            setEmail(e.target.value)
                        }} type="text" placeholder='exemple@gmail.com' className={styles.placeholder} />


                    </div>
                    <button className={styles.buttonInput} onClick={() => verifyEmail(email)} data-splitbee-event="Verify Email Click">
                        <div className={styles.text}>Join now</div>
                    </button>


                </form>
                <div className={styles.index}>
                    <Reveal from='right' delay={.4} duration={.8} >

                        <Image src="/images/modal_index.svg" alt="main image" width={400.6} height={300.5} draggable="false" />
                    </Reveal>
                </div>

            </div>

        </div>
    ) : null
}

export default Modal
