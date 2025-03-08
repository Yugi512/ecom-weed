'use client'

import React, { useEffect, useState } from "react";;
import Image from "next/image";
import Link from "next/link";

const VapesProducts = () => {
    const [vapes, setVapes] = useState<any>([])
    const [vapesInventory,setInventory] = useState<any>([])

    useEffect(() => {
        fetch("http://localhost:3000/api/vapes/inventory")
            .then(res => res.json())
            .then(data => setInventory(data))

        fetch("http://localhost:3000/api/vapes")
            .then(res => res.json())
            .then(data => setVapes(data))
    },[])

    const filteredInven = vapes.filter((item: any) => vapesInventory.map((inven: { vapesID: any; }) => inven.vapesID).includes(item.id))

    if(!vapes) return <h1>loading....</h1>
    
    return (
        <div className="product-items-page">
            <span>
                {filteredInven.map((vape: any) => (
                    <div className="item-card" key={vape.name}>
                        <Link href={`/products/vapes/${vape.name}`}>
                            <Image
                            src={vape.imgUrl}
                            alt={vape.name}
                            height={400}
                            width={400}
                            />
                            <p>{vape.type}</p>
                            <h3>{vape.name}</h3>
                        </Link>
                    </div>
                ))}
            </span>
        </div>
    )   
}

export default VapesProducts;