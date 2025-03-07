import React from "react";

import {auth, signOut} from "@/auth"
import ProfilePage from "@/components/ProfilePage";
import { redirect } from "next/navigation";

const Page = async () => {   
    const session = await auth()
    if(!session ) redirect("/sign-in")
    const logOut = async () => {
        "use server"
        await signOut()
    } 
    return (
        <ProfilePage session={session} logOut={logOut} />
    )

}

export default Page;