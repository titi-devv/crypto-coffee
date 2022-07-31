import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Home from './home'

const Index: NextPage = (href) => {
  return (
   <>
    <Link href={href} passHref>
      <Home />
    </Link>
   </>
  )
}

export default Index
