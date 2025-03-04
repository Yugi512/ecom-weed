'use client'

import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import Link from "next/link";
import SideNavBar from '../../components/SideNavBar'
import HomePageMain from '@/components/HomePageMain'
import { auth } from '@/auth'
// import { seed } from '@/database/seed'
// import { auth } from '@/auth'

// seed()

// interface Session {
//     user: {
//         id: string,
//         name: string,
//         email: string
//     }
// }

const Home = () => {
    const [isOpen,setOpen] = useState(false)
    const [userSession, setUserSession] = useState<unknown>(null)

    const handleClick = () => {
        return setOpen(!isOpen)
    } 

    useEffect(() => {
        const fetchData = async () => {
            const session = await auth()
            return setUserSession(session)
        }
        fetchData();
    }, [])

    console.log(userSession)

    return (
        <div className="root-main-div">
            {isOpen? <SideNavBar handleClick={handleClick}/> : null}
            <div className='header'>
                <li className='head-one'>
                    <button onClick={handleClick}>
                        <Image src="/icons/dock_to_left_24dp_034F39_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                    </button>
                </li>
                <li className='head-two'>
                    <Image src="/icons/blueberry.png" alt="logo" width={80} height={60}/>
                    <h1 className='text-4xl'>Blueberry&apos;s weed shop</h1>
                </li>
                <ul className='head-three'>
                    <li className='acc'>
                        <Link href={`/profile`}>
                            <Image src="/icons/person_24dp_034F39_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                            <span>Account</span>
                        </Link>
                    </li>
                    <li className='cart'>
                        <Link href={'/cart'}>
                            <Image src="/icons/shopping_cart_24dp_034F39_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                            <span>(number)</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <HomePageMain />
            <div className='credits'>
                <h1 className=''>Credits</h1>
                <ul>
                    <Image src="/icons/weed.png" alt="logo" width={24} height={24}/>
                    <li>Icons made by <a href="https://www.flaticon.com/free-icons/weed" title="Weed icons">Weed icons created by Those Icons - Flaticon</a></li>
                </ul>
            </div>
            <div className='information'>
                <ul>
                    <li>
                        <Image src="/icons/schedule_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                        <span>Business Hours</span>
                        <p>24/7 on call</p>
                    </li>
                    <li>
                        <Image src="/icons/payments_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="logo" width={24} height={24}/>
                        <span>Payment Methods</span>
                        <p>Zelle, Paypal, Apple Pay, CashApp, Cash</p>
                    </li>
                </ul>
            </div>
            <div className='footer'>
                <h1>Footer Nav Bar for when they scroll too far down</h1>
            </div>
        </div>
    )
}
export default Home;