'use client'
import SideNavBar from '@/components/SideNavBar';
import React from 'react';
import Image from "next/image"
import Link from 'next/link';

const prerollsPage = () => {

    const handleClick = () => {}

    return (
        <div className='prerolls'>
            <nav id='sidebar' className='nav-sidebar'>
                <ul>
                    <li>
                        <button onClick={handleClick}>
                            <Image src="/icons/dock_to_right_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                        </button>
                    </li>
                    <li>
                        <Image src="/icons/home_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                        <Link href="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Image src="/icons/menu_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                        <Link href="/menu">
                            <span>Menu</span>        
                        </Link>
                    </li>
                    <li>                        
                        <Image src="/icons/inventory_2_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                        <Link href="/products">        
                            <span>Products</span>     
                        </Link>
                        <button className='dropdown-btn'>
                            <Image src="/icons/keyboard_arrow_down_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                        </button>
                    </li>
                    <ul className='submenu'>
                        <div className='text-champagne'>
                            <li>
                                <Image src="/icons/bud.png" alt="logo" width={24} height={24}/>
                                <Link href='/products/flowers'>Flowers</Link>
                            </li>  
                            <li>
                                <Image src="/icons/weed.png" alt="logo" width={24} height={24}/>
                                <Link href='/products/prerolls'>Prerolls</Link>
                            </li>
                            <li>
                                <Image src="/icons/mushroom.png" alt="logo" width={24} height={24}/>
                                <Link href='/products/edibles'>Edibles</Link>
                            </li>
                            <li>
                                <Image src="/icons/vapes.png" alt="logo" width={24} height={24}/>                                    
                                <Link href='/products/vapes'>Vapes</Link>
                            </li>    
                        </div>    
                    </ul> 
                </ul>
            </nav>
        </div>
    )
}

export default prerollsPage;