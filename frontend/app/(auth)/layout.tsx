import { ReactNode } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

const Layout = async ({children} : {children: ReactNode}) => {
    const session = await auth()

    if (session) redirect("/")

    return (
        <main className="relative flex flex-col sm:flex-row">
                <section className="my-auto flex h-full min-h-screen flex-1 items-center bg-pattern bg-cover bg-top bg-dark-100 px-5 py-10 sm:bottom-0 ">
                    <div className="gradient-vertical mx-auto forest-green flex max-w-xl flex-col gap-6 rounded-lg p-10">
                        <div className="sign-in-wrapper">
                            <div className="flex flex-row gap-3">
                                <h1 className="text-2xl font-semibolds text-champagne">Blueberry&apos;s weed store</h1>
                            </div>
                            <div>{children}</div>
                        </div>
                    </div>
                </section>
                <section className="sticky h-40 w-full sm:top-0 sm:h-screen sm:flex-1">
                    <Image
                    src="/icons/weed-w2.jpg"
                    width={1000}
                    height={1000}
                    className="size-full object-cover object-[70%]" alt={""}                    />
                </section>
        </main>
    )
}
export default Layout;