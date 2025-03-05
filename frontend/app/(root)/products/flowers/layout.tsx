import { auth, signOut } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import FlowerPage from "./page";

const Layout = async ({children}: {children:ReactNode}) => {
    const session = await auth()
    const logOut = async () => {
        "use server"
        await signOut()
    }
    return (
        <SessionProvider session={session}>
            <FlowerPage session={session!} logOut={logOut}/>
        </SessionProvider>
    )
}

export default Layout;