import React from "react";
import Edibles from "@/components/Edibles";

const Page = async ({params} : {params: Promise<{name: string}>}) => {
    const name = (await params).name

    return (
        <div>
            <Edibles edibles={name} />
        </div>
    ) 
}

export default Page;