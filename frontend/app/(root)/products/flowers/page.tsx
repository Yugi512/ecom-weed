'use client'

import React from "react";
import { Session } from "next-auth";
import Image from "next/image";
import SideBar from "@/components/SideNavBar";
import { usePathname } from "next/navigation";

const Page = ({ session, logOut }: { session: Session; logOut: Function }) => {
    const pathName = usePathname()
    
    return (
        <div className="main-body-wrapper">
            <span>flower image cards</span>
            <span>prerolls image cards</span>
            <span>edibles image cards</span>
            <span>vapes image cards</span>
        </div>
    )   
}

export default Page;