import React from "react";
import Vapes from "@/components/Vapes";

const Page = async ({params} : {params: Promise<{name: string}>}) => {
    const name = (await params).name

    return (
        <div>
            <Vapes vapes={name} />
        </div>
    ) 
}

export default Page;