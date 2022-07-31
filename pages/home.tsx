import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StartInput from '../components/starter/startInput'
import StartButton from '../components/starter/startButton'
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Crypto coffee</title>

                <meta name="description" content="Fund your articles" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.section1}>

                    <p className={styles.nav}>navbar</p>
                    <h1 className={styles.title}>
                        1 supporter <br></br>is worth 1000 readers
                    </h1>
                    <p className={styles.description}>Accept crypto-coffee donations<br></br>👉 quickly improve your articles, blogs, tutorials, socials, ...</p>
                    <div className={styles.gap}></div>
                    <div className={styles.buttons}>

                        <StartInput />
                        <StartButton />
                    </div>
                    <div className={styles.buttons__desc}>It’s <span className={styles.bold}>free</span> & <span className={styles.bold}>easy</span> . Takes less than 1 minute.</div>
                    <div className={styles.gap}></div>
                    <div className={styles.gap}></div>
                    <div className={styles.trust__logos}>
                        <p className={styles.small__text}>available on</p>
                        <Image src="/logos/medium__logo.png" alt="Logo" width={200} height={50} style={{ opacity: 0.5 }} />
                    </div>
                </div>

            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    My footer
                    <span className={styles.logo}>
                        <Image src="/logos/logo.png" alt="Logo" width={50} height={45} />
                    </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
