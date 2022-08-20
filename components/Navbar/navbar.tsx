import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/components/Navbar.module.css'
import { BsTwitter } from 'react-icons/bs'
import Signup from '../buttons/signup'
//
const Navbar: NextPage = () => {
    return (
        <div className={styles.container}>

            <Image src="/images/logos/logo.png" alt="Logo" width={40} height={35} />
            <div className={styles.buttons}>
                {/* <a href="https://twitter.com/thibuilder" data-splitbee-event="External Link" data-splitbee-event-destination="twitter" target="_blank" rel="noreferrer" className={styles.twitter}>
                    <BsTwitter size={25} />
                </a> */}
                <Signup />
            </div>
        </div>
    )
}

export default Navbar
