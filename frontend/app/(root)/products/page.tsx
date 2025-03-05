'use client'

import React, { useState } from "react";
import Image from "next/image";
import SideNavBar from "@/components/SideNavBar";
import Link from "next/link";
import { signOut } from "@/auth";
import { usePathname } from "next/navigation";

const AllProducts = () =>{
    const pathName = usePathname()
    console.log(pathName)

    return (
        <div className="products-page">
            {isOpen? null :<SideNavBar handleClick={handleClick}/>}
            <div className="prod-one">
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
                    <li>
                        {/* <form action={
                            async () => {
                                'use server'
                                await signOut()
                            }}>
                            <button>Logout</button>
                        </form> */}
                    </li>
                </ul>
            </div>
            </div>    
            <div className="prod-two"></div>
            <div className="prod-three"></div>
            <div className="prod-four"></div>
            <div className="prod-five"></div>
        </div>
    )
}

export default AllProducts;