import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Layout = async ({children}: {children:ReactNode}) => {
    const session = await auth()
    
    return (
        <SessionProvider session={session}>
            <main className="">
                {children}
            </main>
        </SessionProvider>
    )
}

export default Layout;