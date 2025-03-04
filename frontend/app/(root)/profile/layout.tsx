import { ReactNode } from "react";
import {auth} from "@/auth"
import {redirect} from "next/navigation"


const Layout = async ({children}: {children:ReactNode}) => {
    const session = await auth();
    if(!session ) redirect("/sign-in")
    
    return (
        <div>
            {children}
        </div>
    )
}
export default Layout;