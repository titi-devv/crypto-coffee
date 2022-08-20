import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Home from './home'


const Logo: NextPage = (href) => {
    return (
        <>
            <Image src="/images/logos/logo.png" alt="Logo" width={40} height={35} />
        </>


    )
}

export default Logo