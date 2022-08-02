import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/components/startInput.module.css'


const StartInput: NextPage = () => {
  return (
    <div className={styles.container}>

      <span className={styles.domains}>crypto-coffee.me/</span>
      <input type="text" placeholder='enteryourname' className={styles.placeholder} />


    </div>
  )
}

export default StartInput
