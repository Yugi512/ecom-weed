import React from "react";

import {auth} from "@/auth"
// import {redirect} from "next/navigation"

const Page = async () => {
    const session = await auth();
    
    return(
        <div>
            <h1>{session?.user?.name}</h1>
        </div>
    )

}

export default Page;