import { vapesInventoryTable } from '@/database/schema';
import db from '@/drizzle';
import {eq} from "drizzle-orm"
import { NextResponse } from 'next/server';

export const GET = async () => {
    try{
        const data = await db.select().from(vapesInventoryTable).where(eq(vapesInventoryTable.availability, true))
        return NextResponse.json(data)
    }
    catch(err) {
        console.log(err)
        return NextResponse.json({status: 404, error: err})
    }
}