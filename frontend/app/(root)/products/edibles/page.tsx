'use client'

import React from 'react';
import Image from "next/image";
import SideBar from '@/components/SideNavBar';
import { Session } from "next-auth";
import { usePathname } from 'next/navigation';


const Page = ({ session, logOut }: { session: Session; logOut: Function }) => {
    const pathName = usePathname()
    
    return (
        <div className="main-body-wrapper">
            <div className="main-content-wrapper">
                <header>
                <h1>Blueberry&apos;s weed shop</h1>
                    <span>
                        <button onClick={() => logOut()}>
                            logout
                        </button>
                        <span>profile</span>
                        <span>cart</span>
                    </span>
                </header>
                <span>
                    contents
                </span>
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
        </div>
    )
}

export default Page;