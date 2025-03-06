import React from "react";

import {auth} from "@/auth"
import { Session } from "next-auth";
import SideBar from "@/components/SideNavBar";
// import {redirect} from "next/navigation"

const Page =  ({ session, logOut }: { session: Session; logOut: Function }) => {    
    return (
        <div className="main-body-wrapper">
            <h1>{session?.user?.name}</h1>
        </div>
    )

}

export default Page;