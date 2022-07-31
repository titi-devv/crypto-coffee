import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/components/starter/startInput.module.css'


const StartInput: NextPage = () => {
  return (
   <div  className={styles.container}>
        <div className={styles.domains}>crypto-coffee.me/</div>
   </div>
  )
}

export default StartInput
