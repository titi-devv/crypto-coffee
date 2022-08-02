import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/components/footer.module.css'


const Footer: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.copyrights}>
                <Image src="/logos/logo.png" alt="Logo" width={40} height={35} />
                <span className={styles.bold}>
                    © crypto-coffee.me
                </span>
            </div>
            <div className={styles.author}>

                Built with ☕ buy&nbsp;
                <a
                    href="https://twitter.com/thibuilder"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className={styles.underline}>
                        Thibaut
                    </span>
                    .
                </a>
            </div>
        </div>
    )
}

export default Footer
