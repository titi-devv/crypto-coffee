import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StartInput from '../components/buttons/startInput'
import StartButton from '../components/buttons/startButton'
import Navbar from '../components/Navbar/navbar'
import Links from '../components/steps/links'
import Steps from '../components/steps/steps'
import StartNow from '../components/buttons/startNow'
import Footer from '../components/footer/footer'
import Modal from '../components/modal/modal'
import Reveal from '../components/motion/reveal'
import { useEffect } from 'react'
import splitbee from '@splitbee/web';

const Home: NextPage = () => {
    // function handleState() {
    //     splitbee.track("Create Button Click")
    //     splitbee.track("Join Now Click")
    //     splitbee.track("Submit Email")
    //     splitbee.track("Name")
    // }
    // useEffect(() => {
    //     window.addEventListener('load', handleState)
    //     return () => {
    //         window.removeEventListener('load', handleState)
    //     }
    // })
    return (
        <div className={styles.container}>
            <Head>


                <title>Buy Me a Crypto Coffee</title>

                <link rel="icon" href="/favicon.ico" />
                <script async src="https://cdn.splitbee.io/sb.js"></script>



                <meta name="description" content="Accept Crypto Coffees => receive extra revenue" />


                <meta property="og:url" content="https://www.crypto-coffee.me/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Buy Me a Crypto Coffee" />
                <meta property="og:description" content="Accept Crypto Coffees => receive extra revenue" />
                <meta property="og:image" content="https://www.crypto-coffee.me/_next/image?url=%2Fimages%2Fpresentation.png&w=1200&q=75" />

                <meta content="text/html; charset=UTF-8" name="Content-Type" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="crypto-coffee.me" />
                <meta property="twitter:url" content="https://www.crypto-coffee.me/" />
                <meta name="twitter:title" content="Buy Me a Crypto Coffee" />
                <meta name="twitter:description" content="Accept Crypto Coffees => receive extra revenue" />
                <meta name="twitter:image" content="https://www.crypto-coffee.me/_next/image?url=%2Fimages%2Fpresentation.png&w=1200&q=75" />



            </Head>

            <Navbar />
            <Modal />
            <main className={styles.main}>
                <div className={styles.section1}>


                    <Reveal from='bottom' delay={.4} duration={.8} >

                        <h1 className={styles.main__title}>
                            1 supporter <br></br>is worth 1000 readers
                        </h1>
                    </Reveal>



                    <p className={styles.main__description}>Accept crypto-coffee donations<br></br>👉 earn extra revenue & improve your articles.</p>
                    <div className={styles.gap}></div>
                    <div className={styles.buttons}>

                        <StartInput />
                        <StartButton />
                    </div>
                    <div className={styles.buttons__desc}>It’s <span className={styles.bold}>free</span> & <span className={styles.bold}>easy</span> . Takes less than 1 minute.</div>
                    <div className={styles.gap}></div>
                    <div className={styles.trust__logos}>
                        <p className={styles.small__text}>Only on</p>
                        <Image src="/images/logos/medium__logo.png" alt="Logo" width={200} height={50} style={{ opacity: 0.5 }} />
                    </div>


                    <div className={styles.hero__hand}>

                        <Image src="/images/hero__hand.svg" alt="main image" layout='fill' draggable="false" />

                    </div>

                </div>


                <div className={styles.section2}>
                    <h1 className={styles.title}>
                        Give your readers a <br></br>chance to thank you easily
                    </h1>

                    <p className={styles.description}>Crypto Coffee Me gives the ability to your readers to say thanks. In a few clics, they can send you a donation (a crypto coffee) and leave an on-chain message.</p>



                    <div className={styles.gap}></div>
                    <div className={styles.images}>


                        <div className={styles.bell}>
                            <Image src="/images/emojis/bell.svg" alt="notification" layout='fill' draggable={"false"} />
                        </div>

                        <Reveal from='left' delay={.4} duration={.8} >

                            <Image src="/images/send_cryptocoffee.svg" alt="send crypto coffee" width={314} height={361.56} draggable={"false"} />
                        </Reveal>
                        <Reveal from='right' delay={.1} duration={.8} >

                            <div className={styles.right}>
                                <span className={styles.image}>

                                    <Image src="/images/received_cryptocoffee.svg" alt="received crypto coffee" width={314} height={91.63} draggable={"false"} />
                                </span>
                                <span className={styles.image}>

                                    <Image src="/images/received_cryptocoffee_desc.svg" alt="received crypto coffee with description" width={314} height={198.32} draggable={"false"} />
                                </span>
                            </div>
                        </Reveal>
                    </div>
                    <p className={styles.description}>No account required everything is made from their crypto wallet, in a decentralized way.</p>

                </div>
                <div className={styles.section3}>
                    <h1 className={styles.title}>
                        Easy 3 steps process
                    </h1>
                    <div className={styles.gap}></div>


                    <Reveal from='bottom' delay={.1} duration={.8} >
                        <div className={styles.bottom}>
                            <Steps
                                image={'gear'}
                                title={'Set your page up.'}
                                desc1={'Name, Description, Socials, '}
                                desc2={'Profile & Background p.icture'}
                                desc3={'‎ '}
                                step={'01'}
                            />
                            <Links />
                            <Steps
                                image={'clap'}
                                title={'Choose your cryptos.'}
                                desc1={'Ethereum, Bitcoin, Avalanche, '}
                                desc2={'Near, Fuze, Aurora'}
                                desc3={'‎ '}
                                step={'02'}
                            />
                            <Links />
                            <Steps
                                image={'rocket'}
                                title={'Share your page !'}
                                desc1={'Share it at the end of your'}
                                desc2={'articles, in your bio, on twitter'}
                                desc3={'everywhere !'}
                                step={'03'}
                            />
                        </div>
                    </Reveal>

                </div>
                <div className={styles.section4}>
                    <h1 className={styles.title}>
                        Designed for crypto writers
                    </h1>

                    <p className={styles.description} style={{ marginBottom: 30 }}>94.6% of active writers earn <span className={styles.bold}>less</span> than a hundred dollars per month.<br></br><br></br> 96% of crypto articles readers are investors and truly belivers.</p>
                    <Reveal from='right' delay={.2} duration={.8} >

                        <Image src="/images/btc_wallet.svg" alt="Logo" width={303.71} height={303.71} />
                    </Reveal>
                    <p className={styles.description} >They will have more facility to become your supporters by buying you a crypto-coffee.</p>



                    <div className={styles.gap}></div>
                    <StartNow />

                </div>
                <Footer />

            </main >


        </div >
    )
}

export default Home
