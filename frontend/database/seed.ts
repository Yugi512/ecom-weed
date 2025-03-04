// import db from '@/drizzle'

import db from "@/drizzle"
import {data} from "@/leaflydata"
import { flowerEffectsTable, flowerInventoryTable, flowerTable } from "./schema"
import { eq } from "drizzle-orm"

export const seed = async () => { 
    data.map(async (item) => {
        // const obj = {
        //     name: item.name,
        //     imgUrl: item.img_url,
        //     type: item.type,
        //     description: item.description,
        //     mostCommonTerpene: item.most_common_terpene,
        // }
        // await db.select().from(flowerTable).where(eq(flowerTable.name, item.name))
        //     .then(async (data) => {
        //         await db.insert(flowerEffectsTable).values({flowerID: data[0].id!, effects: item.effects})
        //         await db.insert(flowerInventoryTable).values({flowerID: data[0].id!, quantity:10, availability: true })
        //     })
        // await db.update(flowerTable).set({thcLevel: item.thc_level, price: "29.99"}).where(eq(flowerTable.name,item.name))

    })
}
