'use client'

import React,{useState, useEffect} from "react"
import Image from "next/image";
import Link from "next/link";


const Flower = ({flower}: {flower: string}) => {
    const [data, setData] = useState<any>()
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3000/api/flowers/${flower}`)
            .then(res => res.json())
            .then(flower => {
                setData(flower)
                setIsLoading(!isLoading)
            })
            .catch(err => console.log(err));
    },[])
    

    if(isLoading) return <h1>Loading...</h1>;
    if(!data) return null;
    console.log(data)

    return (
        <div className="prod-container">
            <div className="prod-wrapper">
                <div className="prod-image">
                    <Image src={data.strain.imgUrl} alt={""} height={350} width={350}/>
                </div>
                <div className="prod-name-section">
                    <div>
                        <h3>{data.strain.type}</h3>
                    </div>
                    <h1>{data.strain.name}</h1>
                    <h2>${data.strain.price}</h2>
                </div>
                {/* This section will be where the add to cart button will  be once I add the address and implement the user update and stuff*/}
            </div>
            <div className="prod-desc-sec">
                {/* This part would be where the inventory and stuff will be*/}
                <div>
                    <h1>{data.strain.mostCommonTerpene}</h1>
                    <span>{data.strain.thcLevel}</span>
                    <p>{data.strain.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Flower