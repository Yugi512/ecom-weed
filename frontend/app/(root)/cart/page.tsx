import { auth, signOut } from "@/auth";
import CartPage from "@/components/CartPage";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
    const session = await auth()
    if(!session ) redirect("/sign-in")
    const logOut = async () => {
        "use server"
        await signOut()
    }
    
    return (
       <CartPage session={session} logOut={logOut} />
    )
}

export default Page;