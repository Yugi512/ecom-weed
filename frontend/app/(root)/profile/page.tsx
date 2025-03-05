import React from "react";

import {auth} from "@/auth"
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import SideBar from "@/components/SideNavBar";
// import {redirect} from "next/navigation"

const Page =  ({ session, logOut }: { session: Session; logOut: Function }) => {
    const pathName = usePathname()
    
    return (
        <div className="main-body-wrapper">
            <SideBar pathName={`${pathName}`} />
            <h1>{session?.user?.name}</h1>
        </div>
    )

}

export default Page;