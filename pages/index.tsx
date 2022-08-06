import type { NextPage } from 'next'
import Image from 'next/image'
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
