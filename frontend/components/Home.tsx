'use client'

import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import SideBar from '@/components/SideNavBar'
import { redirect, usePathname } from 'next/navigation';
import { Session } from 'next-auth';
import Link from 'next/link';
import HomeFlower from './HomeFlower';
import { seed } from '@/database/seed';
import HomePrerolls from './HomePrerolls';
import HomeEdibles from './HomeEdibles';
import HomeVapes from './HomeVapes';


const Home = ({session, logOut} : {session: Session, logOut: Function}) => {
    const pathName = usePathname()

    const [flowers, setFlowers] = useState<any>([])
    const [flowerInventory,setInventory] = useState<any>([])

    const [prerolls, setPrerolls] = useState<any>([])
    const [prerollsInventory,setPrerollsInventory] = useState<any>([])

    const [edibles, setEdibles] = useState<any>([])
    const [ediblesInventory,setEdiblesInventory] = useState<any>([])

    const [vapes, setVapes] = useState<any>([])
    const [vapesInventory,setVapesInventory] = useState<any>([])
 
    useEffect(() => {
        fetch("http://localhost:3000/api/flowers/inventory")
            .then(res => res.json())
            .then(data => setInventory(data))

        fetch("http://localhost:3000/api/flowers")
            .then(res => res.json())
            .then(data => setFlowers(data))
        
    },[])

    useEffect(() => {
        fetch("http://localhost:3000/api/edibles/inventory")
            .then(res => res.json())
            .then(data => setEdiblesInventory(data))

        fetch("http://localhost:3000/api/edibles")
            .then(res => res.json())
            .then(data => setEdibles(data))
        
    },[])

    useEffect(() => {
        fetch("http://localhost:3000/api/prerolls/inventory")
            .then(res => res.json())
            .then(data => setPrerollsInventory(data))

        fetch("http://localhost:3000/api/prerolls")
            .then(res => res.json())
            .then(data => setPrerolls(data))
        
    },[])

    useEffect(() => {
        fetch("http://localhost:3000/api/vapes/inventory")
            .then(res => res.json())
            .then(data => setVapesInventory(data))

        fetch("http://localhost:3000/api/vapes")
            .then(res => res.json())
            .then(data => setVapes(data))
        
    },[])

    const user = session?.user

    const filteredFlowerInven = flowers.filter((item: any) => flowerInventory.map((inven: { flowerID: any; }) => inven.flowerID).includes(item.id)).slice(0,10)
    
    const filteredPrerollsInven = prerolls.filter((item:any) => prerollsInventory.map((inven: {
        prerollsID:any
    }) => inven.prerollsID).includes(item.id)).slice(0,10);

    const filtereEdiblesInven= edibles.filter((item:any) => ediblesInventory.map((inven: {
        ediblesID:any
    }) => inven.ediblesID).includes(item.id)).slice(0,10);
    
    const filteredVapesInven= vapes.filter((item:any) => vapesInventory.map((inven: {
        vapesID:any
    }) => inven.vapesID).includes(item.id)).slice(0,10);

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
                <div><HomeFlower flowers={filteredFlowerInven} /></div>
                <div><HomePrerolls prerolls={filteredPrerollsInven} /></div>
                <div><HomeEdibles edibles={filtereEdiblesInven} /></div>
                <div><HomeVapes vapes={filteredVapesInven} /></div>
                <div className='work-in-progress'>
                    <h1>website is still a work in progress, more features will be added soon</h1>
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
export default Home;