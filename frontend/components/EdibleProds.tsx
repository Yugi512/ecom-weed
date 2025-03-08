'use client'

import React, { useEffect, useState } from "react";;
import Image from "next/image";
import Link from "next/link";

const EdiblesProducts = () => {
    const [edibles, setEdibles] = useState<any>([])
    const [edibleInventory,setInventory] = useState<any>([])

    useEffect(() => {
        fetch("http://localhost:3000/api/edibles/inventory")
            .then(res => res.json())
            .then(data => setInventory(data))

        fetch("http://localhost:3000/api/edibles")
            .then(res => res.json())
            .then(data => setEdibles(data))
    },[])

    const filteredInven = edibles.filter((item: any) => edibleInventory.map((inven: { ediblesID: any; }) => inven.ediblesID).includes(item.id))

    if(!edibles) return <h1>loading....</h1>
    
    return (
        <div className="product-items-page">
            <span>
                {filteredInven.map((edible: any) => (
                    <div className="item-card" key={edible.name}>
                        <Link href={`/products/edibles/${edible.name}`}>
                            <Image
                            src={edible.imgUrl}
                            alt={edible.name}
                            height={400}
                            width={400}
                            />
                            <p>{edible.type}</p>
                            <h3>{edible.name}</h3>
                        </Link>
                    </div>
                ))}
            </span>
        </div>
    )   
}

export default EdiblesProducts