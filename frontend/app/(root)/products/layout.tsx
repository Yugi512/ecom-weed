import { auth, signOut } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import ProductPage from "@/components/ProductPage";

const Layout = async ({children}: {children:ReactNode}) => {
    const session = await auth()
    const logOut = async () => {
        'use server'
        await signOut()
    }

    return (
        <SessionProvider session={session}>
            <ProductPage session={session!} logOut={logOut} children={children} />
        </SessionProvider>
    )
}

export default Layout;