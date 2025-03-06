'use client'

import React from "react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const Page = ({ session, logOut }: { session: Session; logOut: Function }) => {
    
    return (
        <div className="product-items-page">
            <span>
                images go here
            </span>
            <span>prerolls image cards</span>
            <span>edibles image cards</span>
            <span>vapes image cards</span>
        </div>
    )   
}

export default Page;