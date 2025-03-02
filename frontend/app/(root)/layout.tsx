import { ReactNode } from "react";

const Layout = async ({children}: {children:ReactNode}) => {
    return (
        <main className="">
            {children}
        </main>
    )
}

export default Layout;