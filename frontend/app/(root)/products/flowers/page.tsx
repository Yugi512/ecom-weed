import React from "react";
import Link from "next/link";
import Image from "next/image";
import SideBar from "@/components/SideNavBar";



const Page = async () => {
    // const document = Document

    return (
        <div className="main-body-wrapper">
            <SideBar />
            <div className="main-content-wrapper">
                <header>
                    Blueberry&apos;s weed shop
                </header>
                <span>
                    text
                </span>
            </div>
        </div>
    )   
}

export default Page;