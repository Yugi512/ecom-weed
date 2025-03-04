'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SideNavBar from "@/components/SideNavBar";
import {auth,signOut} from "@/auth"

const Page = () => {
    const [isOpen,setOpen] = useState(true)
    
    const handleClick = () => {
        return setOpen(!isOpen)
    } 

    return (
        <div className="">
            {isOpen? null :<SideNavBar handleClick={handleClick}/>}
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
                    <form action={
                            async () => {
                                'use server'
                                await signOut()
                            }}>
                            <button>logout</button>
                    </form>
                </ul>
            </div>    
            <div className="prod-two"></div>
            <div className="prod-three"></div>
            <div className="prod-four"></div>
            <div className="prod-five"></div>
        </div>
    )
}

export default Page;