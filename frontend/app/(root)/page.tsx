import React from 'react'
import Image from 'next/image'
import SideNavBar from '../../components/SideNavBar'

const Home = () => {
    return (
        <div className="root-main-div">
            {/* <SideNavBar /> */}
            <div className='header'>
                <li>
                    <button>
                        <Image src="/icons/dock_to_left_24dp_034F39_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                    </button>
                </li>
                <li>
                    <Image src="/icons/blueberry.png" alt="logo" width={40} height={40}/>
                    <h1 className='text-3xl'>Welcome to Blueberry&apos;s shop</h1>
                </li>
                <ul>
                    <li>
                        <Image src="/icons/person_24dp_034F39_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                        <span>Account</span>
                    </li>
                    <li>
                        <Image src="/icons/shopping_cart_24dp_034F39_FILL0_wght400_GRAD0_opsz24.svg" alt="logo" width={24} height={24}/>
                        <span>Cart</span>
                    </li>
                </ul>
            </div>
            <div className='main-content'>
                <div className=''>
                    <h1>This section will display a bunch of items</h1>
                    <span>9 flower items</span>
                    <span>9 preroll items</span>
                    <span>9 edible items</span>
                    <span>9 vape items</span>
                </div>
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
            <div className='credits'>
                <h1 className=''>Credits</h1>
                <ul>
                    <Image src="/icons/weed.png" alt="logo" width={24} height={24}/>
                    <li>Icons made by <a href="https://www.flaticon.com/free-icons/weed" title="Weed icons">Weed icons created by Those Icons - Flaticon</a></li>
                </ul>
            </div>
            <div className='footer'>
                <h1>Footer Nav Bar for when they scroll too far down</h1>
            </div>
        </div>
    )
}
export default Home;