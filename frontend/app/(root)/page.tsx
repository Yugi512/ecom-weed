import React from 'react';
import Home from '@/components/Home';
import { auth, signOut } from '@/auth';

const Page = async () => {
    const session = await auth()
    const logOut = async () => {
        'use server'
        await signOut()
    }
    return (
        <Home session={session!} logOut={logOut}/>
    )
}
export default Page;