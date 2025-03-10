'use client'

import React, { useEffect, useState } from "react";;
import Image from "next/image";
import Link from "next/link";

const FlowerProducts = () => {
    const [flowers, setFlowers] = useState<any>([])
    const [flowerInventory,setInventory] = useState<any>([])

    useEffect(() => {
        fetch("https://ecom-weed.vercel.app/api/flowers/inventory")
            .then(res => res.json())
            .then(data => setInventory(data))

        fetch("https://ecom-weed.vercel.app/api/flowers")
            .then(res => res.json())
            .then(data => setFlowers(data))
    },[])

    const filteredFlowerInven = flowers.filter((item: any) => flowerInventory.map((inven: { flowerID: any; }) => inven.flowerID).includes(item.id))

    console.log(filteredFlowerInven)

    if(!flowers) return <h1>loading....</h1>
    
    return (
        <div className="product-items-page">
            <span>
                {filteredFlowerInven.map((flower: any) => (
                    <div className="item-card" key={flower.name}>
                        <Link href={`/products/flowers/${flower.name}`}>
                            <Image
                            src={flower.imgUrl}
                            alt={flower.name}
                            height={400}
                            width={400}
                            />
                            <p>{flower.type}</p>
                            <h3>{flower.name}</h3>
                        </Link>
                    </div>
                ))}
            </span>
        </div>
    )   
}

export default FlowerProducts