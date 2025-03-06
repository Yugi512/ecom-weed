'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const HomeFlower = ({flowers}: {flowers: Array<Object>}) => {
    const [items, setItems] = useState<any>()

    useEffect(() => {    
        setItems(document?.querySelectorAll('.slider .item')!)
    },[])

    let active = 3;

    function loadShow(){
        let stt = 0;

        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1; 

        for(var i = active + 1; i < items.length; i++ ){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6; 
        }

        stt = 0;
        
        for(var i = active - 1; i >= 0; i-- ){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6; 
        }

    }
    loadShow()

    const nextOnClick = () => {
        active = active + 1 < items.length ? active + 1 : active;
        loadShow()
    }

    const prevOnClick = () => {
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow() 
    }

    return (
        <div>
            <h1>Popular Flower Products</h1>
            <span className='content-container'>
                <div className='slider'>
                    {flowers.map((flower: any) => {
                        return (
                            <div className='item'>
                                <Link href={`/products/flowers/${flower.name}`} key={flower.name}>
                                    <Image src={`${flower.imgUrl}`} alt={''} height={200} width={200}/>
                                    <p>{flower.type}</p>
                                    <h3>{flower.name}</h3>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </span>
        </div>
    )
}

export default HomeFlower;