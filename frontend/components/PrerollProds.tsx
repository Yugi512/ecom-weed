'use client'

import React, { useEffect, useState } from "react";;
import Image from "next/image";
import Link from "next/link";

const PrerollsProducts = () => {
    const [prerolls, setPrerolls] = useState<any>([])
    const [prerollInventory,setInventory] = useState<any>([])

    useEffect(() => {
        fetch("https://ecom-weed.vercel.app/api/prerolls/inventory")
            .then(res => res.json())
            .then(data => setInventory(data))

        fetch("https://ecom-weed.vercel.app/api/prerolls")
            .then(res => res.json())
            .then(data => setPrerolls(data))
    },[])

    const filteredInven = prerolls.filter((item: any) => prerollInventory.map((inven: { prerollsID: any; }) => inven.prerollsID).includes(item.id))

    if(!prerolls) return <h1>loading....</h1>
    
    return (
        <div className="product-items-page">
            <span>
                {filteredInven.map((preroll: any) => (
                    <div className="item-card" key={preroll.name}>
                        <Link href={`/products/prerolls/${preroll.name}`}>
                            <Image
                            src={preroll.imgUrl}
                            alt={preroll.name}
                            height={400}
                            width={400}
                            />
                            <p>{preroll.type}</p>
                            <h3>{preroll.name}</h3>
                        </Link>
                    </div>
                ))}
            </span>
        </div>
    )   
}

export default PrerollsProducts