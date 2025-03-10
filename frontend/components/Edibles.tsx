'use client'

import React,{useState, useEffect} from "react"
import Image from "next/image";
import Link from "next/link";


const Edibles = ({edibles}: {edibles: string}) => {
    const [data, setData] = useState<any>()
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch(`https://ecom-weed.vercel.app/api/edibles/${edibles}`)
            .then(res => res.json())
            .then(edible => {
                setData(edible)
                setIsLoading(!isLoading)
            })
    },[])
    
    if(isLoading) return <h1>Loading...</h1>;
    if(!data) return null;
    console.log(data)

    return (
        <div className="prod-container">
            <div className="prod-wrapper">
                <div className="prod-image">
                    <Image src={data.edibles.imgUrl} alt={""} height={350} width={350}/>
                </div>
                <div className="prod-name-section">
                    <h1>{data.edibles.name}</h1>
                    <h2>${data.edibles.price}</h2>
                </div>
                {/* This section will be where the add to cart button will  be once I add the address and implement the user update and stuff*/}
            </div>
            <div className="prod-desc-sec">
                {/* This part would be where the inventory and stuff will be*/}
                <div>
                    <p>{data.edibles.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Edibles