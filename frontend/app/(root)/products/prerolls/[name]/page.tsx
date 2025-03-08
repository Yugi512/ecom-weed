import React from "react";
import Prerolls from "@/components/Prerolls";

const Page = async ({params} : {params: Promise<{name: string}>}) => {
    const name = (await params).name

    return (
        <div>
            <Prerolls preroll={name} />
        </div>
    ) 
}

export default Page;