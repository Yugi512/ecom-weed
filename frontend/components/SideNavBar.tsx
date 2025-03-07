'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


const SideBar = ({pathName}: {pathName: string}) => {

    const [toggleButton,setToggleBtn] = useState<Element>()
    const [sideBar,setSideBars] = useState<Element>()
    const [pathElement, setPathElement] = useState<Element>()

    useEffect(() => {
        setSideBars(document?.getElementById('sidebar')!)
        setToggleBtn(document?.getElementById('toggle-btn')!)
        setPathElement(document?.getElementById(`${pathName}`)!)
    },[])

    function highLightText(){
        pathElement?.classList.add('active')
    }
    
    highLightText()

    function toggleSideBar(){
        sideBar?.classList.toggle('open')
        toggleButton?.classList.toggle('rotate')

        Array.from(sideBar?.getElementsByClassName('show')!).forEach(ul => {
            ul.classList.remove('show')
            ul.previousElementSibling?.classList.remove('rotate')
        })
    }

    function toggleSubMenu(button: Element){
        button.nextElementSibling?.classList.toggle('show')
        button.classList.toggle('rotate')
    
        if(!sideBar?.classList.contains('open')){
            sideBar?.classList.toggle('open')
            toggleButton?.classList.toggle('rotate')
        }
    }  

    return (
        <div className="side-menu-wrapper">
            <nav id="sidebar">
                <ul>
                    <li>
                        <button onClick={toggleSideBar} id="toggle-btn">
                            <Image src="/icons/dock_to_right_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                        </button>
                    </li>
                    <li id="/">
                        <Link href="/" >
                            <Image src="/icons/home_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                            <span>Home</span>
                        </Link>
                    </li>
                    {/* <li id="/menu">
                        <Link href="/menu" >
                            <Image src="/icons/menu_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                            <span>Menu</span>        
                        </Link>
                    </li> */}
                    <li >
                        <button onClick={(e) => toggleSubMenu(e.currentTarget)} className="dropdown-btn">
                            <Image src="/icons/inventory_2_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                            <span>Products</span>
                            <Image src="/icons/keyboard_arrow_down_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                        </button>
                        <ul className="sub-menu">
                            <div >
                                <li id="/products" >
                                    <Link href={'/products'} >
                                        <Image src="/icons/package_2_24dp_F7E7CE_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                                        <span>All</span>
                                    </Link>
                                </li>
                                <li id="/products/flowers">
                                    <Link href={'/products/flowers'} >
                                        <Image src="/icons/bud.png" alt="logo" width={24} height={24}/>
                                        <span>Flowers</span>
                                    </Link>
                                </li>
                                <li id="/products/prerolls">
                                    <Link href={'/products/prerolls'}>
                                        <Image src="/icons/weed.png" alt="logo" width={24} height={24}/>
                                        <span>Prerolls</span>
                                    </Link>
                                </li>
                                <li id="/products/edibles">
                                    <Link href={'/products/edibles'} >
                                        <Image src="/icons/mushroom.png" alt="logo" width={24} height={24}/>
                                        <span>Edibles</span>
                                    </Link>
                                </li>
                                <li id="/products/vapes"> 
                                    <Link href={'/products/vapes'} >
                                        <Image src="/icons/vapes.png" alt="logo" width={24} height={24}/>                                    
                                        <span>Vapes</span>
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )   
}

export default SideBar;