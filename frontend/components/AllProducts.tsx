'use client'


// going to have to revisit later on not now tho




import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const AllProducts = () => {
    const [allProducts,setAllProducts] = useState<any>([])

    const [categories,setCategories] = useState<any>([])

    const [flowers, setFlowers] = useState<any>([])
    const [flowerInventory,setInventory] = useState<any>([])

    const [prerolls, setPrerolls] = useState<any>([])
    const [prerollsInventory,setPrerollsInventory] = useState<any>([])

    const [edibles, setEdibles] = useState<any>([])
    const [ediblesInventory,setEdiblesInventory] = useState<any>([])

    const [vapes, setVapes] = useState<any>([])
    const [vapesInventory,setVapesInventory] = useState<any>([])

    useEffect(() => {
        fetch("http://localhost:3000/api/categories")
        .then(res => res.json())
        .then(data => setCategories(data))

        fetch("http://localhost:3000/api/flowers/inventory")
            .then(res => res.json())
            .then(data => setInventory(data))

        fetch("http://localhost:3000/api/flowers")
            .then(res => res.json())
            .then(data => setFlowers(data))

        fetch("http://localhost:3000/api/edibles/inventory")
            .then(res => res.json())
            .then(data => setEdiblesInventory(data))

        fetch("http://localhost:3000/api/edibles")
            .then(res => res.json())
            .then(data => setEdibles(data))
        
        fetch("http://localhost:3000/api/prerolls/inventory")
            .then(res => res.json())
            .then(data => setPrerollsInventory(data))

        fetch("http://localhost:3000/api/prerolls")
            .then(res => res.json())
            .then(data => setPrerolls(data))

        fetch("http://localhost:3000/api/vapes/inventory")
            .then(res => res.json())
            .then(data => setVapesInventory(data))

        fetch("http://localhost:3000/api/vapes")
            .then(res => res.json())
            .then(data => setVapes(data))
        
    },[])

    const filteredFlowerInven = flowers.filter((item: any) => flowerInventory.map((inven: { flowerID: any; }) => inven.flowerID).includes(item.id));
    
    const filteredPrerollsInven = prerolls.filter((item:any) => prerollsInventory.map((inven: {
        prerollsID:any
    }) => inven.prerollsID).includes(item.id));

    const filtereEdiblesInven= edibles.filter((item:any) => ediblesInventory.map((inven: {
        ediblesID:any
    }) => inven.ediblesID).includes(item.id));
    
    const filteredVapesInven= vapes.filter((item:any) => vapesInventory.map((inven: {
        vapesID:any
    }) => inven.vapesID).includes(item.id));

    useEffect(() => {
        setAllProducts(filteredFlowerInven.concat(filtereEdiblesInven,filteredPrerollsInven,filteredVapesInven))
    },[filtereEdiblesInven,filteredFlowerInven,filteredPrerollsInven,filteredVapesInven])


    return (
        <div className='all-products-container'>
            <div className='all-products'>
                {allProducts.map((item: any) => {
                    <div className="item-flower" key={item.name}>
                    <Link href={`/products//${item.name}`}>
                        <Image
                        src={item.imgUrl}
                        alt={item.name}
                        height={400}
                        width={400}
                        />
                        <p>{item.type}</p>
                        <h3>{item.name}</h3>
                    </Link>
                </div>
                })}
            </div>
        </div>
    )
}
export default AllProducts;