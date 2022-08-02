import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/components/navbar.module.css'
import { BsTwitter } from 'react-icons/bs'
import Signup from '../buttons/signup'

const Navbar: NextPage = () => {
    return (
        <div className={styles.container}>
            <Image src="/logos/logo.png" alt="Logo" width={40} height={35} />
            <div className={styles.buttons}>
                <BsTwitter size={25} />
                <Signup />
            </div>
        </div>
    )
}

export default Navbar
