import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StartInput from '../components/buttons/startInput'
import StartButton from '../components/buttons/startButton'
import Navbar from '../components/navbar/navbar'
import Links from '../components/steps/links'
import Steps from '../components/steps/steps'
import StartNow from '../components/buttons/startNow'
import Footer from '../components/footer/footer'
const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Crypto coffee</title>

                <meta name="description" content="Fund your articles" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className={styles.main}>
                <div className={styles.section1}>

                    <h1 className={styles.main__title}>
                        1 supporter <br></br>is worth 1000 readers
                    </h1>
                    <p className={styles.main__description}>Accept crypto-coffee donations<br></br>👉 quickly improve your articles, blogs, tutorials, socials, ...</p>
                    <div className={styles.gap}></div>
                    <div className={styles.buttons}>

                        <StartInput />
                        <StartButton />
                    </div>
                    <div className={styles.buttons__desc}>It’s <span className={styles.bold}>free</span> & <span className={styles.bold}>easy</span> . Takes less than 1 minute.</div>
                    <div className={styles.gap}></div>
                    <div className={styles.trust__logos}>
                        <p className={styles.small__text}>available on</p>
                        <Image src="/logos/medium__logo.png" alt="Logo" width={200} height={50} style={{ opacity: 0.5 }} />
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
                            <Image src="/images/emojis/bell.svg" alt="notification" width={70} height={78} draggable={"false"} />
                        </div>

                        <Image src="/images/send_cryptocoffee.svg" alt="send crypto coffee" width={314} height={361.56} draggable={"false"} />
                        <Image src="/images/received_cryptocoffee.svg" alt="received crypto coffee" width={314} height={91.63} draggable={"false"} />
                        <Image src="/images/received_cryptocoffee_desc.svg" alt="received crypto coffee with description" width={314} height={198.32} draggable={"false"} />
                    </div>
                    <p className={styles.description}>No account required everything is made from their crypto wallet, in a decentralized way.</p>

                </div>
                <div className={styles.section3}>
                    <h1 className={styles.title}>
                        Easy 3 steps process
                    </h1>
                    <div className={styles.gap}></div>
                    {/* <div className={styles.top}>
                        <div className={styles.number1}>01</div>
                        <div className={styles.link}></div>
                        <div className={styles.number2}>02</div>
                        <div className={styles.link}></div>
                        <div className={styles.number3}>03</div>
                    </div> */}

                    <div className={styles.bottom}>
                        <Steps
                            image={'gear'}
                            title={'Set your page up.'}
                            desc1={'Name, Description, Socials, '}
                            desc2={'Profile & Background picture'}

                            step={'01'}
                        />
                        <Links />
                        <Steps
                            image={'clap'}
                            title={'Choose your cryptos.'}
                            desc1={'Ethereum, Bitcoin, Avalanche, '}
                            desc2={'Near, Fuze, Aurora'}

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

                </div>
                <div className={styles.section4}>
                    <h1 className={styles.title}>
                        Designed for writers
                    </h1>

                    <p className={styles.description} style={{ marginBottom: 30 }}>93,4% of active crypto writers earn <span className={styles.bold}>less</span> than a hundred dollars per month.<br></br><br></br> 96% of crypto articles readers are investors and truly belivers.</p>
                    <Image src="/images/btc_wallet.svg" alt="Logo" width={303.71} height={303.71} />
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
