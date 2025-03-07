import { prerollsTable } from '@/database/schema';
import db from '@/drizzle';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try{
        const data = await db.select().from(prerollsTable);
        return NextResponse.json(data)
    }
    catch (err){
        console.log(err)
        return NextResponse.json({status:404, error: err})
    }
}
