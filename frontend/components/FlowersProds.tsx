'use client'

import React, { useEffect, useState } from "react";;
import Image from "next/image";
import Link from "next/link";

const FlowerProducts = () => {
    const [flowers, setFlowers] = useState<any>([])
    const [flowerInventory,setInventory] = useState<any>([])
    const [available,setAvailable] = useState<any>([])

    useEffect(() => {
        fetch("http://localhost:3000/api/flowers/true")
            .then(res => res.json())
            .then(data => setInventory(data))

        fetch("http://localhost:3000/api/flowers")
            .then(res => res.json())
            .then(data => setFlowers(data))
    },[])

    const filtered = flowers.filter((item: any) => flowerInventory.map((inven: { flowerID: any; }) => inven.flowerID).includes(item.id))

    console.log(filtered)
    return (
        <div className="product-items-page">
            <span>
                <button>
                    <Image src={'/icons/arrow_back.svg'} height={45} width={45} alt={""}/>
                </button>
                {filtered.map((flower: any) => {
                    
                })}
                <button>
                    <Image src={'/icons/arrow_forward.svg'} height={45} width={45} alt={""}/>
                </button>
            </span>
            <span>
                <button>
                    <Image src={'/icons/arrow_back.svg'} height={45} width={45} alt={""}/>
                </button>
                images go here
                <button>
                    <Image src={'/icons/arrow_forward.svg'} height={45} width={45} alt={""}/>
                </button>
            </span>
            <span>
                <button>
                    <Image src={'/icons/arrow_back.svg'} height={45} width={45} alt={""}/>
                </button>
                images go here
                <button>
                    <Image src={'/icons/arrow_forward.svg'} height={45} width={45} alt={""}/>
                </button>
            </span>
            <span>
                <button>
                    <Image src={'/icons/arrow_back.svg'} height={45} width={45} alt={""}/>
                </button>
                images go here
                <button>
                    <Image src={'/icons/arrow_forward.svg'} height={45} width={45} alt={""}/>
                </button>
            </span>
        </div>
    )   
}

export default FlowerProducts