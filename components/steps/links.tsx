/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import React from 'react'
import styles from '../../styles/components/steps.module.css'
import Image from 'next/image'

const Links: NextPage = () => {
    return (
        <>
            <div className={styles.item__link}>
                <Image
                    className={styles.item__link__image}
                    src={'/images/link.svg'}
                    alt="iso"
                    width={'70px'}
                    height={'70px'}
                    draggable="false"
                />
            </div>
        </>
    )
}

export default Links