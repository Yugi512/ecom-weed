import React from "react";
import Flower from "@/components/Flower";

const Page = async ({params} : {params: Promise<{name: string}>}) => {
    const name = (await params).name

    return (
        <div>
            <Flower flower={name} />
        </div>
    ) 
}

export default Page;