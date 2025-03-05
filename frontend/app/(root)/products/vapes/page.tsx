'use client'

import SideBar from '@/components/SideNavBar';
import React from 'react';
import Image from 'next/image';
import { Session } from "next-auth";

const vapesPage = ({ session, logOut }: { session: Session; logOut: Function }) => {
    return (
        <div className="main-body-wrapper">
            <div className="main-content-wrapper">
                <header>
                    Blueberry&apos;s weed shop
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

export default vapesPage;