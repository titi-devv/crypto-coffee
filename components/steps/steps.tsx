
import { NextPage } from 'next'
import React from 'react'
import styles from '../../styles/components/steps.module.css'
import Image from 'next/image'
interface myProps {
    title: string
    image: string
    desc1: string
    desc2: string
    desc3?: string
    step: string
}

const Steps: NextPage<myProps> = (props) => {
    const { title, desc1, desc2, desc3, image, step } = props
    return (
        <>
            <div className={styles.item__box}>

                <div className={styles.step__number}>{step}</div>


                <Image
                    src={`/images/emojis/${image}.png`}
                    alt="iso"
                    width={image == "clap" ? '48px' : '45px'}
                    height={image == "clap" ? '48px' : '45px'}
                    draggable="false"

                    className={styles.item__box__image}
                />
                <h4 className={styles.item__box__title}>{title}</h4>
                <p className={styles.item__box__desc}>{desc1}</p>
                <p className={styles.item__box__desc}>{desc2}</p>
                <p className={styles.item__box__desc}>{desc3}</p>
            </div>
        </>
    )
}

export default Steps