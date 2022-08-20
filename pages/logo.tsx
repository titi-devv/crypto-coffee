import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Home from './home'


const Logo: NextPage = (href) => {
    return (
        <div>
            <Image src="/images/presentation.png" alt="Logo" width={600} height={350} />
        </div>


    )
}

export default Logo