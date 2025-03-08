import db from '@/drizzle';
import {NextResponse} from 'next/server';
import { vapesInventoryTable, vapesTable } from "@/database/schema";
import {eq} from "drizzle-orm";

export const GET = async (req: Request,{params} : {params: Promise<{name: string}>}) => {
    const name = (await params).name
    const strain = name.replace(/%20/g," ")
    let data: any = {}
    try{
        await db.select().from(vapesTable).where(eq(vapesTable.name, strain))
            .then(async (product: any) => {
                data.vape = product[0]
                data.inventory = await db.select().from(vapesInventoryTable).where(eq(vapesInventoryTable.vapesID, product[0].id))
            })
        return NextResponse.json(data)
    }
    catch(err){
        console.log(err)
        return NextResponse.json({status:404 ,error: err})
    }

}

export const PATCH = async (req: Request, { params }: { params: { name : string }}) => {

}

export const DELETE = async (req: Request, { params }: { params: { name : string }}) => {

}