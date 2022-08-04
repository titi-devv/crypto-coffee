import type { NextPage } from 'next'
import { useContext, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../../styles/components/startInput.module.css'
import { ModalContext } from '../contexts/ModalContext';


const StartInput: NextPage = () => {
  const { getVal } = useContext(ModalContext)

  const [isWriting, setIsWriting] = useState(false)
  const toggleWriting = (input: string) => {
    if (input.length === 0) {
      setIsWriting(false)

    }
    else if (input.length >= 1) {
      setIsWriting(true)
      getVal({ val: input })


    }
  }

  return (
    <div className={styles.container}>
      <span className={styles.domains}>crypto-coffee.me/</span>
      <input onChange={(e) => {

        toggleWriting(e.target.value)
      }} type="text" placeholder='enteryourname' className={styles.placeholder} />


    </div>
  )
}

export default StartInput
