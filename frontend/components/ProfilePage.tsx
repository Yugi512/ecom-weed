'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";

import SideBar from "@/components/SideNavBar";
import { Session } from "next-auth";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";


const ProfilePage = ({ session, logOut }: { session: Session; logOut: Function }) => {
    const pathName = usePathname()

    const user = session?.user
    
    return (
        <div className="main-body-wrapper">
        <SideBar pathName={`${pathName}`} />
        <div className="main-content-wrapper">
            <header className='header'>
                <span>
                    <Image src={'/icons/blueberry.png'} alt={''} height={85} width={85}/>
                    <h1>Blueberry&apos;s weed shop</h1>
                </span>
                <span className='user-stuff'>
                    <button onClick={() => {
                        user ? logOut() : redirect('/sign-in')
                    }}>
                        {user ? "logout" : "login"}
                    </button>
                    <span className='profile'>
                        <Link href={`/profile`}>
                            <Image src={'/icons/person_40.svg'} alt={''} height={35} width={35}/>
                        </Link>
                    </span>
                    <span>
                        <Link href={'/cart'}>
                            <Image src={'/icons/shopping_cart_40.svg'} alt={''} width={35} height={35} />
                        </Link>
                    </span>
                </span>
            </header>
            <div className="profile-page">
                <h1>Still in development, will be implemented later on</h1>
            </div>
            <div className='information'>
                <div className=''>
                    <Image src="/icons/schedule_40.svg" alt="logo" width={40} height={40}/>
                    <span>Business Hours</span>
                    <p>24/7 on call</p>
                </div>
                <div className='middle'>
                    <Image src="/icons/payments_40.svg" alt="logo" width={40} height={40}/>
                    <span>Payment Methods</span>
                    <div >
                        <p>Zelle, Paypal, Apple Pay, CashApp, Cash</p>
                    </div>  
                </div>
                <div className='delivery'>
                    <Image src={'/icons/local_shipping.svg'} alt={''} height={40} width={40}/>
                    <span>Free local delivery over $75, </span>
                    <span>we can deliver within 60 miles, time to deliver varies</span>
                </div>
            </div>
            <div className='footer'>
                <h1>This is fake websie that does not sell any substance, to purpose of this site is to practice and test out the creators(me) knowledge in web development</h1>
                <h1>The process in making this site has been fun, and I shall continue to expand my knowledge in web development and software engineering</h1>
                <h1>most icons come from google fonts and flaticon</h1>
                <ul>
                    <li><a href="https://www.flaticon.com/free-icons/blueberry" title="blueberry icons">Blueberry icons created by mikan933 - Flaticon</a></li>
                    <li><a href="https://www.flaticon.com/free-icons/weed" title="Weed icons">Weed icons created by Freepik - Flaticon</a></li>
                    <li><a href="https://www.flaticon.com/free-icons/fungus" title="fungus icons">Fungus icons created by Freepik - Flaticon</a></li>
                    <li><a href="https://www.flaticon.com/free-icons/marijuana" title="Marijuana icons">Marijuana icons created by gruffystudio - Flaticon</a></li>
                    <li><a href="https://www.flaticon.com/free-icons/joint" title="joint icons">Joint icons created by smalllikeart - Flaticon</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default ProfilePage;