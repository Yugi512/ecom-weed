import { ReactNode } from "react";
import {auth, signOut} from "@/auth"
import {redirect} from "next/navigation"
import Page from "./page";
import { SessionProvider } from "next-auth/react";

const Layout = async ({children}: {children:ReactNode}) => {
    const session = await auth()
    if(!session ) redirect("/sign-in")
    const logOut = async () => {
        "use server"
        await signOut()
    }
    return (
        <SessionProvider session={session}>
            <Page session={session!} logOut={logOut}/>
        </SessionProvider>
    )
}

export default Layout;