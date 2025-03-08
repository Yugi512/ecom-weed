import db from '@/drizzle';
import {NextResponse} from 'next/server';
import {flowerTable,flowerEffectsTable, flowerInventoryTable} from "@/database/schema";
import {eq} from "drizzle-orm";

export const GET = async (req: Request,{params} : {params: Promise<{name: string}>}) => {
    const name = (await params).name
    const strain = name.replace(/%20/g," ")
    const data: any = {}
    try{
        await db.select().from(flowerTable).where(eq(flowerTable.name, strain))
            .then(async (product: any) => {
                data.strain = product[0]
                data.inventory = await db.select().from(flowerInventoryTable).where(eq(flowerInventoryTable.flowerID, product[0].id))
                data.effects= await db.select().from(flowerEffectsTable).where(eq(flowerEffectsTable.flowerID, product[0].id))
            })
        return NextResponse.json(data)
    }
    catch(err){
        console.log(err)
        return NextResponse.json({status:404 ,error: err})
    }

}

// export const PATCH = async (req: Request, { params }: { params: { name : string }}) => {

// }

// export const DELETE = async (req: Request, { params }: { params: { name : string }}) => {

// }