'use client'

import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import SideBar from '@/components/SideNavBar'
import { redirect, usePathname } from 'next/navigation';
import { Session } from 'next-auth';
import Link from 'next/link';


const Home = ({session, logOut} : {session: Session, logOut: Function}) => {
    const pathName = usePathname()
    const [flowers, setFlowers] = useState<any>([])
    const [flowerInventory,setInventory] = useState<any>([])
    const [items, setItems] = useState<any>([])
    const [nextBtn, setNextBtn] = useState<Element>()
    const [prevBtn, setPrevBtn] = useState<Element>()

 
    useEffect(() => {
        fetch("http://localhost:3000/api/flowers/true")
            .then(res => res.json())
            .then(data => setInventory(data))

        fetch("http://localhost:3000/api/flowers")
            .then(res => res.json())
            .then(data => setFlowers(data))

        setItems(document?.querySelectorAll('.slider .item')!)
        setNextBtn(document?.getElementById('next')!)
        setPrevBtn(document?.getElementById('prev')!)

    },[])

    let len = items.length

    let active = 3;
    function loadShow(){
        let stt = 0;
        for(let i = active + 1; i < len; i++ ){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 -0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[1].style.zIndex = -stt;
            items[1].style.filter = 'blur(5px)';
            items[1].style.opacity = stt > 2 ? 0 : 0.6; 
        }
        stt = 0;
        for(let i = active - 1; i >= 0; i-- ){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 -0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[1].style.zIndex = -stt;
            items[1].style.filter = 'blur(5px)';
            items[1].style.opacity = stt > 2 ? 0 : 0.6; 
        }

    }

    loadShow()

    const user = session?.user

    const filteredFlowerInven = flowers.filter((item: any) => flowerInventory.map((inven: { flowerID: any; }) => inven.flowerID).includes(item.id)).slice(0,7)
    
    console.log(items)

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
                <span className='content-container'>
                    <div className='slider'>
                        {/* {filteredFlowerInven.map((flower: any,index: any) => {
                            return (
                                <div className='item-card'>
                                    <Link href={`/products/flowers/${flower.name}`} key={flower.name}>
                                        <Image className="image-color image" src={`${flower.imgUrl}`} alt={''} height={200} width={200}/>
                                        <p>{flower.type}</p>
                                        <h3>{flower.name}</h3>
                                    </Link>
                                </div>
                            )
                        })} */}
                        
                        <div className="item">
                            <h1>slide 1</h1>
                            Yes, a variable can hold a JSX element. JSX expressions are essentially syntactic sugar for JavaScript objects, which can be assigned to variables. After compilation, JSX transforms into regular JavaScript function calls that evaluate to JavaScript objects. This allows for the storage and manipulation of JSX elements within variables, enabling functionalities such as conditional rendering and dynamic content updates
                        </div>
                        <div className="item">
                            <h1>slide 2</h1>
                            Yes, a variable can hold a JSX element. JSX expressions are essentially syntactic sugar for JavaScript objects, which can be assigned to variables. After compilation, JSX transforms into regular JavaScript function calls that evaluate to JavaScript objects. This allows for the storage and manipulation of JSX elements within variables, enabling functionalities such as conditional rendering and dynamic content updates
                        </div>
                        <div className="item">
                            <h1>slide 3</h1>
                            Yes, a variable can hold a JSX element. JSX expressions are essentially syntactic sugar for JavaScript objects, which can be assigned to variables. After compilation, JSX transforms into regular JavaScript function calls that evaluate to JavaScript objects. This allows for the storage and manipulation of JSX elements within variables, enabling functionalities such as conditional rendering and dynamic content updates
                        </div>
                        <div className="item">
                            <h1>slide 4</h1>
                            Yes, a variable can hold a JSX element. JSX expressions are essentially syntactic sugar for JavaScript objects, which can be assigned to variables. After compilation, JSX transforms into regular JavaScript function calls that evaluate to JavaScript objects. This allows for the storage and manipulation of JSX elements within variables, enabling functionalities such as conditional rendering and dynamic content updates
                        </div>
                        <div className="item">
                            <h1>slide 5</h1>
                            Yes, a variable can hold a JSX element. JSX expressions are essentially syntactic sugar for JavaScript objects, which can be assigned to variables. After compilation, JSX transforms into regular JavaScript function calls that evaluate to JavaScript objects. This allows for the storage and manipulation of JSX elements within variables, enabling functionalities such as conditional rendering and dynamic content updates
                        </div>
                        <div className="item">
                            <h1>slide 6</h1>
                            Yes, a variable can hold a JSX element. JSX expressions are essentially syntactic sugar for JavaScript objects, which can be assigned to variables. After compilation, JSX transforms into regular JavaScript function calls that evaluate to JavaScript objects. This allows for the storage and manipulation of JSX elements within variables, enabling functionalities such as conditional rendering and dynamic content updates
                        </div>
                        <div className="item">
                            <h1>slide 7</h1>
                            Yes, a variable can hold a JSX element. JSX expressions are essentially syntactic sugar for JavaScript objects, which can be assigned to variables. After compilation, JSX transforms into regular JavaScript function calls that evaluate to JavaScript objects. This allows for the storage and manipulation of JSX elements within variables, enabling functionalities such as conditional rendering and dynamic content updates
                        </div>
                        <div className="item">
                            <h1>slide 8</h1>
                            Yes, a variable can hold a JSX element. JSX expressions are essentially syntactic sugar for JavaScript objects, which can be assigned to variables. After compilation, JSX transforms into regular JavaScript function calls that evaluate to JavaScript objects. This allows for the storage and manipulation of JSX elements within variables, enabling functionalities such as conditional rendering and dynamic content updates
                        </div>
                        <div className="item">
                            <h1>slide 9</h1>
                            Yes, a variable can hold a JSX element. JSX expressions are essentially syntactic sugar for JavaScript objects, which can be assigned to variables. After compilation, JSX transforms into regular JavaScript function calls that evaluate to JavaScript objects. This allows for the storage and manipulation of JSX elements within variables, enabling functionalities such as conditional rendering and dynamic content updates
                        </div>
                    </div>
                    <button id='next'><Image src={'/icons/arrow_forward.svg'} alt={''} height={40} width={40}/></button>
                    <button id='prev'><Image src={'/icons/arrow_back.svg'} alt={''} height={40} width={40}/></button>
                </span>
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