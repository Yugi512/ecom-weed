// import db from '@/drizzle'

import db from "@/drizzle"
import {data} from "@/leaflydata"
import { ediblesInventoryTable, ediblesTable, flowerEffectsTable, flowerInventoryTable, flowerTable, prerollsInventoryTable, prerollsTable, productCategoryTable, vapesInventoryTable, vapesTable } from "./schema"
import { eq } from "drizzle-orm"

// export const seed = async () => { 
//     data.map(async (item) => {
        // const obj = {
        //     name: item.name,
        //     imgUrl: item.img_url,
        //     type: item.type,
        //     description: item.description,
        //     mostCommonTerpene: item.most_common_terpene,
        // }
//         // await db.select().from(flowerTable).where(eq(flowerTable.name, item.name))
//         //     .then(async (data) => {
//         //         await db.insert(flowerEffectsTable).values({flowerID: data[0].id!, effects: item.effects})
//         //         await db.insert(flowerInventoryTable).values({flowerID: data[0].id!, quantity:10, availability: true })
//         //     })
//         // await db.update(flowerTable).set({thcLevel: item.thc_level, price: "29.99"}).where(eq(flowerTable.name,item.name))

//     })
// }

const prerolls = [
    {
        name: "Good Day Farm: Double Cross | Good Day J's Pre-Rolls | 1pk | 1g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/etZK9K2aRzqizsYv2jBG_GDF_PREROLLS_WHITE-BG-(1).jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/etZK9K2aRzqizsYv2jBG_GDF_PREROLLS_WHITE-BG-(1).jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "10.99",
        description: "GOOD DAY J'S are the most smokable pre-roll in the South. Our pre-rolls are made from premium full flower, meaning that the medicine within never contains shake or trim which can produce a subpar or harsh smoke. With a wide offering of premium strains, your favorite flower is now ready to light. In line with our dedication to sourcing the best materials, these papers are the world’s finest European rolling papers. Wrapped in 100% organic and environmentally responsible hemp papers, GOOD DAY J's are made with vegan, gluten free, non-GMO, kosher, and pesticide-free materials."
    },
    {
        name: "THC-A pre-rolls Jar of 10 x 2G Northern Lights INDICA",
        imgUrl: "https://leafly-public.imgix.net/products/photos/vWeai8JjRKmm0sW1ekvh_42acdd3a-2b55-49eb-9f36-8dac5f9fc2b3?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/vWeai8JjRKmm0sW1ekvh_42acdd3a-2b55-49eb-9f36-8dac5f9fc2b3?auto=compress%2Cformat&w=302&dpr=2",
        type: "Indica",
        price: "24.99",
        description: "Introducing our THC-A Joint Jar - 10 Pack In-house Grown. Experience the ultimate in convenience and potency with our THC-A Joint Jar, containing 10 premium 2 gram joints. Each joint is carefully crafted with high-quality THC-A flower, ensuring a consistent and powerful experience. Key Features:10 x 2 gram THC-A joints per jar!High-potency THC-A flower for a strong and effective experience!Convenient and portable jar packaging!Perfect for sharing or enjoying on your own!"
    },
    {
        name: "GMO Cookies Smokos 2pk x 0.5g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/Xil7oxMQmqrlRVybTS8t_illicit-marijuana-preroll-smokos-2pk-indica-1.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/Xil7oxMQmqrlRVybTS8t_illicit-marijuana-preroll-smokos-2pk-indica-1.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "14.99",
        description: "The Strain - GMO Cookies is a potent indica hybrid strain developed by Mamiko Seeds, born from the powerful cross of Girl Scout Cookies and Chemdog. Despite its name, GMO Cookies is not a genetically modified organism but a masterful blend of two legendary strains. This variety is celebrated for its unique flavor profile, featuring strong aromas of diesel, coffee, and fruit, with subtle hints of garlic, mushroom, and onion (GMO) inherited from its Chemdog lineage.The strain's complex terpene profile includes Limonene, Caryophyllene, Myrcene, Humulene, and Bisabolol, contributing to its distinctive flavors and effects. Limonene adds a touch of citrus that uplifts the senses, while Caryophyllene introduces spicy notes that enhance the earthy and pungent aroma. Myrcene brings musky and herbal undertones, promoting a sense of relaxation. Humulene adds subtle earthy and woody flavors, and Bisabolol imparts gentle floral hints that round out the overall taste experience. This harmonious combination results in an earthy, pungent flavor with diesel overtones that linger on the palate.GMO Cookies is renowned for its deeply relaxing effects that envelop the body while allowing the mind to remain focused. Users often report feeling relaxed, happy, and uplifted, enjoying a long-lasting high that soothes both mind and body. Drawing from its Girl Scout Cookies lineage, it offers euphoric and uplifting sensations that enhance mood and promote happiness. The Chemdog heritage contributes to the potent body relaxation, providing a soothing experience without total sedation. This balanced blend makes GMO Cookies a favorite among those seeking mental clarity paired with physical tranquility."
    },
    {
        name: "Good Day Farm: Bellini | Good Day J's Pre-Rolls | 1pk | 1g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/ACrnCCFTTh6BwCHwVBcY_GDF_PREROLLS_WHITE-BG-(1).jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/ACrnCCFTTh6BwCHwVBcY_GDF_PREROLLS_WHITE-BG-(1).jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Indica",
        price: "9.99",
        description: "GOOD DAY J'S are the most smokable pre-roll in the South. Our pre-rolls are made from premium full flower, meaning that the medicine within never contains shake or trim which can produce a subpar or harsh smoke. With a wide offering of premium strains, your favorite flower is now ready to light. In line with our dedication to sourcing the best materials, these papers are the world’s finest European rolling papers. Wrapped in 100% organic and environmentally responsible hemp papers, GOOD DAY J's are made with vegan, gluten free, non-GMO, kosher, and pesticide-free materials."
    },
    {
        name: "Gelato #33 Smokos 2pk x 0.5g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/pw0NT2cpS3yGucemew9M_illicit-marijuana-preroll-smokos-2pk-hybrid-1.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/pw0NT2cpS3yGucemew9M_illicit-marijuana-preroll-smokos-2pk-hybrid-1.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "14.99",
        description: "The Strain - Gelato #33 is a hybrid strain crafted by master breeder collective Cookies Fam, resulting from the flavorful cross of Sunset Sherbet and Thin Mint Girl Scout Cookies. Much like the dessert it's named after, Gelato #33 offers a smooth and creamy experience that delights the senses. The strain is renowned for its complex flavor profile, combining sweet berry notes with earthy undertones and a hint of diesel, creating a taste that's both indulgent and refreshing.The strain's primary terpene profile includes Caryophyllene, Myrcene, Limonene, Humulene, and Linalool. Caryophyllene adds a spicy warmth that enhances the earthy aspects of the flavor. Myrcene brings forward musky sweetness, promoting a sense of relaxation. Limonene introduces a bright citrus zest that uplifts the mood, while Linalool contributes subtle floral notes for a well-rounded aroma. Humulene adds a touch of herbal nuance, completing the rich tapestry of flavors."
    },
    {
        name: "Blueberry Kush - 1G Triple Infused Ice Packs (Rosin, Hash, and Diamonds)",
        imgUrl: "https://leafly-public.imgix.net/products/photos/kbL8n1kSTwW0RcKQrFaL_0b1c45e1-fb80-4308-9f65-40099aeea187?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/kbL8n1kSTwW0RcKQrFaL_0b1c45e1-fb80-4308-9f65-40099aeea187?auto=compress%2Cformat&w=302&dpr=2%202xhttps://leafly-public.imgix.net/products/photos/kbL8n1kSTwW0RcKQrFaL_0b1c45e1-fb80-4308-9f65-40099aeea187?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/kbL8n1kSTwW0RcKQrFaL_0b1c45e1-fb80-4308-9f65-40099aeea187?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Indica",
        price: "34.99",
        description: "Rove 1G Ice Pack Preroll, the world’s first triple-infused preroll. Made with premium-grade flower fully-infused with THCA diamonds and solventless ice hash rosin then they're expertly rolled. Super smooth and ultra potent, Rove Ice Packs test up to 40% THC. Welcome to the next evolution of prerolls. Premium Organic Flower. This powerful indica strain provides an almost immediate calming sensation and deep relaxation with sweet berry tones, helping you take on the day or catch some much-needed shut-eye."
    },
    {
        name: "CLOVR- Pre-rolls- 0.5g 2 Pack - Lemon Cookie OG",
        imgUrl: "https://leafly-public.imgix.net/products/photos/D3uGFMHvRIeC1gX8WiR5_2-pack-1600x1600.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/D3uGFMHvRIeC1gX8WiR5_2-pack-1600x1600.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "14.99",
        description: "Lemon Cookies OG has dense buds with citrus aromas that will erupt from the bag and intensify when smoking. This strain produces a high that is euphoric but not overwhelming, leaving your body relaxed and free of tension. Lemon Cookies is a Sativa-leaning hybrid marijuana strain crossed by Lemon Haze and GSC. If you're a fan of a good old batch of nutty lemon cookies, this bud is totally for you. Lemon Cookies capture this flavor perfectly, pairing rich sweet citrus with a slightly spicy nutty cookie for an insanely delicious taste. The aroma is of earthy pungent citrus with a nutty overtone that's slightly herbal and sour as the nugs are broken apart and burned."
    },
    {
        name: "Good Day Farm: Trop Cookies | Good Day J's Pre-Rolls | 1pk | 1g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/t3cqUMT6y0LGkgyV2p7g_GDF_PREROLLS_WHITE-BG-(1).jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/t3cqUMT6y0LGkgyV2p7g_GDF_PREROLLS_WHITE-BG-(1).jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Sativa",
        price: "9.99",
        description: "GOOD DAY J'S are the most smokable pre-roll in the South. Our pre-rolls are made from premium full flower, meaning that the medicine within never contains shake or trim which can produce a subpar or harsh smoke. With a wide offering of premium strains, your favorite flower is now ready to light. In line with our dedication to sourcing the best materials, these papers are the world’s finest European rolling papers. Wrapped in 100% organic and environmentally responsible hemp papers, GOOD DAY J's are made with vegan, gluten free, non-GMO, kosher, and pesticide-free materials."
    },
    {
        name: "The Clear TWAX Infused Pre-roll 1g | Grapevine  ",
        imgUrl: "https://leafly-public.imgix.net/products/photos/N38791XxRaKp8XGOs27j_7f51b523-e8d8-4676-b04d-e23267327c64?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/N38791XxRaKp8XGOs27j_7f51b523-e8d8-4676-b04d-e23267327c64?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Indica",
        price: "19.99",
        description: "The TWAX Pre-roll is perfect for consumers that wants to add a twist of flavor to their smoke. Grapevine is the juicy, sweet grape flavor that we all recognize. The essence of each pull is highly expressive, lingering, and succulent."
    },
    {
        name: "Silver Haze THCa Pre-Rolls | 2 Count | Sativa",
        imgUrl: "https://leafly-public.imgix.net/products/photos/guGsLkWJSnyeOwwkY7ul_4c9e3e28-6343-4e7b-bbee-889482dca924?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/guGsLkWJSnyeOwwkY7ul_4c9e3e28-6343-4e7b-bbee-889482dca924?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Sativa",
        price: "19.99",
        description: "Habit THC-A pre-rolls are made by isolating the rare, ultra potent cannabinoid and cryo-infusing it with fresh cut hemp. It's more than a smoke; it's a crafted experience, a ritual reserved for those who demand the best."
    },
    {
        name: "STRAWBERRY COUGH 40S PREROLL 1G",
        imgUrl: "https://leafly-public.imgix.net/products/photos/k1a4BPSjQ7uXPsHDJxWn_v2_CA_1G_PR_S_STRAWBERRY-COUGH.png?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/k1a4BPSjQ7uXPsHDJxWn_v2_CA_1G_PR_S_STRAWBERRY-COUGH.png?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Sativa",
        price: "9.99",
        description: "A cross between Strawberry Field and Haze. Strawberry Cough brings a thoughtful and energetic high that is perfect for conversation, reading, or working."
    },
    {
        name: "Jack Herer Pre-Roll Pack 2ct",
        imgUrl: "https://leafly-public.imgix.net/products/photos/CAPuHQLG5RkKq0J5vdg7_7eb9b377-eb02-4282-ab0b-128e6aabaf5f?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/CAPuHQLG5RkKq0J5vdg7_7eb9b377-eb02-4282-ab0b-128e6aabaf5f?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Sativa",
        price: "19.99",
        description: "Cross of Haze x Northern Lights #5 x Shiva Slunk from Yager Creek with a palate of mouthwatering oranges with hints of spice and pine. This classic sativa-dominant strain fills you with creativity and an uplifted, cerebral headspace. Suitable for all experience levels, this is the perfect daytime strain for enjoying nature or getting motivated, as well as aiding those with chronic fatigue, depression, and migraines."
    },
    {
        name: "Good Day Farm: Poison OG | Good Day J's Pre-Rolls | 1pk | 1g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/akNkaFcTtGWApTlNNSp8_GDF_PREROLLS_WHITE-BG-(1).jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/akNkaFcTtGWApTlNNSp8_GDF_PREROLLS_WHITE-BG-(1).jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Sativa",
        price: "9.99",
        description: "GOOD DAY J'S are the most smokable pre-roll in the South. Our pre-rolls are made from premium full flower, meaning that the medicine within never contains shake or trim which can produce a subpar or harsh smoke. With a wide offering of premium strains, your favorite flower is now ready to light. In line with our dedication to sourcing the best materials, these papers are the world’s finest European rolling papers. Wrapped in 100% organic and environmentally responsible hemp papers, GOOD DAY J's are made with vegan, gluten free, non-GMO, kosher, and pesticide-free materials."
    },
    {
        name: "Acapulco Gold | Sativa - Diamond THCA-Infused Pre-Roll - 1G Joint",
        imgUrl: "https://leafly-public.imgix.net/products/photos/FjDa4zLTQGIGMsPIlGXA_HH-Diamond-Preroll-1G-Tube-and-Joint-1200x1200-28e5ebb.png?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/FjDa4zLTQGIGMsPIlGXA_HH-Diamond-Preroll-1G-Tube-and-Joint-1200x1200-28e5ebb.png?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Sativa",
        price: "10.99",
        description: "Treat yourself to the treasure of a lifetime. Acapulco Gold is widely-recognized as one of the greatest Sativas in the world of Cannabis, and once you experience this creamy, toffee-tasting slice of heaven, you’ll understand why. Expect motivation, energy, and a cerebral high that’ll have you back for more."
    },
    {
        name: "Coco Chanel Pride Pre-Roll 1g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/oVdLy9gyQyCXfT68Weuv_110f6a29-ea14-4748-912c-9c8cf6c08713?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/oVdLy9gyQyCXfT68Weuv_110f6a29-ea14-4748-912c-9c8cf6c08713?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Sativa",
        price: "9.99",
        description: "This cross of Cocomero Gelatti x Grape Gas, bred by Compound Genetics, boasts an irresistible gas and sour grape palate. Utilized for ADHD and depression, Coco Chanel provides a clear, calm high that’s good for any time of day and novice or experienced users."
    },
    {
        name: "Granny MAC Pre-Roll",
        imgUrl: "https://leafly-public.imgix.net/products/photos/vDMqbqWSgWDWKR5OqBL1_Pre-roll.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/vDMqbqWSgWDWKR5OqBL1_Pre-roll.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Sativa",
        price: "9.99",
        description: "Fuel your creativity and boost your energy with Granny MAC, a sativa strain bred by Capulator. This powerful strain is a cross between Columbian and MAC and offers a unique aroma, with earthy and floral notes, as well as hints of citrus and pine.Granny MAC’s terpene profile is dominated by limonene, beta-myrcene, linalool, and beta-caryophyllene, while providing a potent blend of uplifting and energizing effects, making it a perfect choice for those seeking to tackle the day with enthusiasm."
    },
    {
        name: "Purple Runtz THCa Pre-rolls | Hybrid",
        imgUrl: "https://leafly-public.imgix.net/products/photos/1rMYI4MUSvWfdaTa5N9S_25a5cfd5-3c52-4258-b84e-ceef404cc60e?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/1rMYI4MUSvWfdaTa5N9S_25a5cfd5-3c52-4258-b84e-ceef404cc60e?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "14.99",
        description: "Introducing Sparks: tiny masterpieces packed with top-shelf THCa flower and coated in pure THCa crystals. Crafted from cold-cured hemp, Sparks offer exceptional terpene profiles and a richly enhanced smoking experience. The cold curing process preserves natural flavors and aromas, ensuring a potent, heavy-hitting smoke for true connoisseurs."
    },
    {
        name: "Black Cherry Punch 1G Infused Pre-Roll",
        imgUrl: "https://leafly-public.imgix.net/products/photos/HfgQz3LWTmOwiH9f5Rtf_PIFF-STICKS-OREGON-BLACK-CHERRY.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/HfgQz3LWTmOwiH9f5Rtf_PIFF-STICKS-OREGON-BLACK-CHERRY.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "9.99",
        description: "Black Cherry Punch is an indica-dominant strain with a loud flavor profile full of sweet cherry flavors and floral undertones.PIFF STIXS is an infused pre-roll made with high-quality premium indoor flower, never shake. The flower is infused with liquid diamond sauce and rolled in bubble hash, covering the outside adding a higher level of THC and flavor."
    },
    {
        name: "Cream Pie Kush | 1g Pre-Roll",
        imgUrl: "https://leafly-public.imgix.net/products/photos/ePlGppTrTZKAxDfc7V5c_DSC00925-Edit-(1).jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/ePlGppTrTZKAxDfc7V5c_DSC00925-Edit-(1).jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "9.99",
        description: "Taking home 1st Place Best Indica in 3 events across California and Arizona, Cream Pie Kush is the definition of Reserve Quality. Cream Pie Kush is a pheno we hunted from seed of LA Kush Cake bred by Seed Junky Genetics, crossing Wedding Cake and Kush Mints. A true 10 out of 10 in every category; nug structure, size, density, trichome coverage, and high THC. The perfect combo of earthy, gassy, and fruity flavors guaranteed to leave you wondering about its origin every time!"
    },
    {
        name: "Biscotti 1G Infused Pre-Roll",
        imgUrl: "https://leafly-public.imgix.net/products/photos/JnRUn59LRoGXnsiMJkeO_PIFF-STICKS-OREGON-BISCOTTI.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/JnRUn59LRoGXnsiMJkeO_PIFF-STICKS-OREGON-BISCOTTI.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "9.99",
        description: "Biscotti has an aroma of earthy herbs and fruits with a notable cookie flavor on exhale. If you're looking for a classic indica with an insanely delicious flavor, you've found it! PIFF STIXS is an infused pre-roll made with high-quality premium indoor flower, never shake. The flower is infused with liquid diamond sauce and rolled in bubble hash, covering the outside adding a higher level of THC and flavor."
    },
    {
        name: "Dr. Gonzo Pre-Roll 1g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/XX4L9kLeS38hb5W2iQRz_High-Life-Farms---1g-Pre-Roll---Digital-Menu-Image.png?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/XX4L9kLeS38hb5W2iQRz_High-Life-Farms---1g-Pre-Roll---Digital-Menu-Image.png?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "9.99",
        description: "Step into the wild and wonderful world of Dr. Gonzo, the extraordinary hybrid that holds the key to unlocking your inner creativity and joy. With its therapeutic magic, this strain becomes a trusted ally in conquering anxiety, depression, and pain. Dr. Gonzo's effects are a euphoric symphony of upliftment and talkative bliss, guiding you towards newfound inspiration and social connections. As the delightful flavors mingle on your taste buds, notes of succulent peach, alluring skunk, earthly tones, and hints of fruity sweetness come together in a thrilling dance of sensations. Embrace the adventure that awaits with Dr. Gonzo and discover the boundless possibilities this strain has to offer."
    },
    {
        name: "Haterade Platinum Line Pre-Roll 1g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/mPJKEMpOT3WXxN3AdqhK_haterade-mason-jar-open.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/mPJKEMpOT3WXxN3AdqhK_haterade-mason-jar-open.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "9.99",
        description: "Haterade is the indica-dominant hybrid result of crossing Larry OG with Granddaddy Purple. It hits your mind as well as your body, so expect an uplifted euphoria in addition to the buzzing body high that starts behind your eyes and melts all the way down to your toes."
    },
    {
        name: "Peach Crescendo Joint Pack 3.5g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/v7YHhIy3SDuAJhOkuxQP_preroll-pack.png?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/v7YHhIy3SDuAJhOkuxQP_preroll-pack.png?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Hybrid",
        price: "44.99",
        description: "Coming from Ethos Genetics’ Unique Boutique Line, Peach Crescendo F-1 is a complex cross of Chem D, I-95, Mandarin Cookies, and Peach Rings. The flavor profile varies from the traditional Chem D sour flavor to a sweet, tropical citrus. Beautiful green buds have dark orange hairs that are interspersed around purple calyxes dripping in resin."
    },
    {
        name: "THC-A pre-rolls Jar of 10 x 2G Bubba Kush INDICA",
        imgUrl: "https://leafly-public.imgix.net/products/photos/3nWmFCMRO6fVCmbvJp4A_8d4f3060-2426-4d7d-bda6-5bd0b73c351e?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/3nWmFCMRO6fVCmbvJp4A_8d4f3060-2426-4d7d-bda6-5bd0b73c351e?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Indica",
        price: "19.99",
        description: "Experience the ultimate in convenience and potency with our THC-A Joint Jar, containing 10 premium 2 gram joints. Each joint is carefully crafted with high-quality THC-A flower, ensuring a consistent and powerful experience."
    },
    {
        name: "Sweet Lyfe Moonrock Blunt THCA+THCP - Blue Z OG - Indica",
        imgUrl: "https://leafly-public.imgix.net/products/photos/2pbsasnFThWTg9VsGG9v_314b2e9d-6856-4674-967c-fcc02d088608?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/2pbsasnFThWTg9VsGG9v_314b2e9d-6856-4674-967c-fcc02d088608?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Indica",
        price: "29.99",
        description: "Sweet Lyfe’s top shelf flower has arrived, and we’ve used it to make moonrock blunts! Our THC-A moonrock blunts is featured in a king size tobacco-free hemp wrap, weighing in at 2.5 grams! Our pre-rolls are filled with 2.5 grams of THC-A and THC-P moonrocks, a thick coating of THC-A distillate, and then covered in THC-A kief. We offer 9 different strains."
    },
    {
        name: "LA Confidential Doublepacks : Two .75 Gram Pre-Rolls",
        imgUrl: "https://leafly-public.imgix.net/products/photos/Zv5r8dWKQuiHXPmGgToy_TKO-Two-.75-gram-Joints-2.jpg?auto=compress%2Cformat&w=302&dpr=1 1x, https://leafly-public.imgix.net/products/photos/Zv5r8dWKQuiHXPmGgToy_TKO-Two-.75-gram-Joints-2.jpg?auto=compress%2Cformat&w=302&dpr=2 2x",
        type: "Indica",
        price: "19.99",
        description: "TKO is passionate about growing the most unique, terpene-rich flower with sustainable practices which allows us to able to offer premium products at an affordable price."
    },
    {
        name: "Good Day Farm: Titty Sprinkles | Good Day J's Pre-Rolls | 1pk | 1g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/EaLdFU7SK60Bej9hxBac_GDF_PREROLLS_WHITE-BG-(1).jpg?auto=compress%2Cformat&w=302&dpr=1 1x, https://leafly-public.imgix.net/products/photos/EaLdFU7SK60Bej9hxBac_GDF_PREROLLS_WHITE-BG-(1).jpg?auto=compress%2Cformat&w=302&dpr=2 2x",
        type: "Indica",
        price: "9.99",
        description: "GOOD DAY J'S are the most smokable pre-roll in the South. Our pre-rolls are made from premium full flower, meaning that the medicine within never contains shake or trim which can produce a subpar or harsh smoke. With a wide offering of premium strains, your favorite flower is now ready to light. In line with our dedication to sourcing the best materials, these papers are the world’s finest European rolling papers. Wrapped in 100% organic and environmentally responsible hemp papers, GOOD DAY J's are made with vegan, gluten free, non-GMO, kosher, and pesticide-free materials."
    },
    {
        name: "Chief Biker Kush Pre-Roll 1g",
        imgUrl: "https://leafly-public.imgix.net/products/photos/Af7ZuVnRSq3NSVbUuaxy_Chief_1g_Pre-Roll_Digital_Menu.png?auto=compress%2Cformat&w=302&dpr=1 1x, https://leafly-public.imgix.net/products/photos/Af7ZuVnRSq3NSVbUuaxy_Chief_1g_Pre-Roll_Digital_Menu.png?auto=compress%2Cformat&w=302&dpr=2 2x",
        type: "Indica",
        price: "9.99",
        description: "Biker Kush is a potent hybrid strain with a heavy onset, perfect for clocking out at the end of the day. Without a heavy sedative feeling, Biker Kush helps people relax with their friends or enjoy the moment. This strain's pine and floral aromas complement its citrusy, floral flavor."
    },
    {
        name: "Kushberry (1G Fatboy Pre-Roll)",
        imgUrl: "https://leafly-public.imgix.net/products/photos/0Fk0FdsSREijn1cZu9zF_KUSHBERRY_CUR_1G_FatBoy.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/0Fk0FdsSREijn1cZu9zF_KUSHBERRY_CUR_1G_FatBoy.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Indica",
        price: "9.99",
        description: "Our new and improved 1G Fatboy Pre-Rolls.With this product you will find all the new features we have added to make your smoking more pleasurable. With the wider body and crutch that will increase airflow for bigger pulls. Burns slower and lasts longer. The real neat part is more flower and less paper. It’s only indoor flower, no stems or trim. This product is stored and produced in a climate-controlled environment. Expertly cultivated and curated strains. And the best thing about the new Fatboy 1G pre-roll is that every pre-roll is inspected by hand."
    },
    {
        name: "Cherry Blossom (1G Fatboy Pre-Roll)",
        imgUrl: "https://leafly-public.imgix.net/products/photos/rE2i5CG4RWGbjyUu8fLQ_CherryBlossom_CRU_1G_FatBoy_1500x1500.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/rE2i5CG4RWGbjyUu8fLQ_CherryBlossom_CRU_1G_FatBoy_1500x1500.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Indica",
        price: "9.99",
        description: "Our new and improved 1G Fatboy Pre-Rolls.With this product you will find all the new features we have added to make your smoking more pleasurable. With the wider body and crutch that will increase airflow for bigger pulls. Burns slower and lasts longer. The real neat part is more flower and less paper. It’s only indoor flower, no stems or trim. This product is stored and produced in a climate-controlled environment. Expertly cultivated and curated strains. And the best thing about the new Fatboy 1G pre-roll is that every pre-roll is inspected by hand."
    },
    {
        name: "Mitten Extracts 1g Infused Preroll - Watermelon Zkittles (Indica)",
        imgUrl: "https://leafly-public.imgix.net/products/photos/vMAzfbS0RHeglWVxZz4U_ed4bc3b2-915a-43e1-b04b-7eb408a00548?auto=compress%2Cformat&w=302&dpr=1 1x, https://leafly-public.imgix.net/products/photos/vMAzfbS0RHeglWVxZz4U_ed4bc3b2-915a-43e1-b04b-7eb408a00548?auto=compress%2Cformat&w=302&dpr=2 2x",
        type: "Indica",
        price: "10.99",
        description: "Our Watermelon Zkittles infused preroll combines the sweetness of watermelon with the tropical essence of Zkittles. This indica strain delivers a refreshing balanced high, inducing a euphoric and calming mental state."
    },
    {
        name: "Tropical Gelato 1g Premium Pre-Roll",
        imgUrl: "https://leafly-public.imgix.net/products/photos/xTbRVk5sSEC9EdU8kOGQ_1g-preroll.png?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/xTbRVk5sSEC9EdU8kOGQ_1g-preroll.png?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Indica",
        price: "9.99",
        description: "A potent blend of our terpe Wedding Cake/Strawberry Banana/Watermelon Gelato. A bright hybrid that boasts flavors of ripe strawberry, sweet melon, and red berries along with the distinct gelato taste, finishing with sweet vanilla/fuel. Our 1 gram pre-roll is made with premium flower, no shake, larf, or trim. Inhale - Exhale - Smile"
    },
    {
        name: "Rainbow Cookies | Hybrid - Diamond THCA-Infused Pre-Roll - 1G Joint",
        imgUrl: "https://leafly-public.imgix.net/products/photos/Jx747aiCS7GQMXArsJUw_HH-Diamond-Preroll-1G-Tube-and-Joint-1200x1200-28e5ebb.png?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/Jx747aiCS7GQMXArsJUw_HH-Diamond-Preroll-1G-Tube-and-Joint-1200x1200-28e5ebb.png?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Indica",
        price: "14.99",
        description: "Rainbow Cookies is as delicious as it sounds, a berry-flavored hybrid with hints of sour and nutty to cap off a complex and enjoyable flavor. While some hybrids lean towards sativa or indica, Rainbow Cookies is prized for its perfect balance between energizing and sedating: A day spent with Rainbow Cookies means a day spent enjoying introspective thoughts and a relaxed body, without any overwhelming sleepiness or jitters."
    },
    {
        name: "Berries and Cream Primo Infused Preroll + 20% Hash 1.3 grams",
        imgUrl: "https://leafly-public.imgix.net/products/photos/YGbOx80ASnuhIh1S8KrE_5-PRIMO-INDICA.JPG?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/YGbOx80ASnuhIh1S8KrE_5-PRIMO-INDICA.JPG?auto=compress%2Cformat&w=302&dpr=2%202x",
        type: "Indica",
        price: "14.99",
        description: "1.3 grams of the same goodness offered by our original Torpedo: whole, premium flower, diamond sauce, delicious distillate and pure trichome kief. The addition of full spectrum bubble hash makes this artisanal, small batch experience unique and memorable."
    },
    {
        name: "Royal Purple 1g Premium Preroll",
        imgUrl: "",
        type: "Indica",
        price: "9.99",
        description: "Royal Purple is a sweet, indica-leaning blend that offers up a heavy, tingly couch lock, making it a sleepy bud that's best left for nighttime use. The flower has a sweet and floral taste, with hints of gas that hit your palate on the back end. After smoking, users report feeling relaxed and ready for bed!"
    },
]

const edibles = [
    {
        name: "8000mg AVENTUS8 GUMMIES BLUE RASPBERRY DELTA 8 + DELTA 9 + THC-P STRONG EXOTIC BLEND",
        imgUrl: "https://leafly-public.imgix.net/products/photos/lvxsY0R8SnWf4vpTRabx_f190fa11-2cd0-4e9f-a0e6-454d23de18dd?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/lvxsY0R8SnWf4vpTRabx_f190fa11-2cd0-4e9f-a0e6-454d23de18dd?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "139.99",
        description: "Each gummy weighs about 5 grams in size and delivers a serious 200mg of blended THC consisting of delta 8, delta 9 and thcp for the ultimate entourage effect experience."
    },
    {
        name: "Hidden Hills Live Resin Gummy Belts | 3000mg STRAWBERRY BELTS",
        imgUrl: "https://leafly-public.imgix.net/products/photos/7mNl4Q6SOuGkwmqjyPi5_f68740ea-33de-40d0-8d24-134911ecf44a?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/7mNl4Q6SOuGkwmqjyPi5_f68740ea-33de-40d0-8d24-134911ecf44a?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "79.99",
        description: "High-strength 3000mg edibles, with 10 pieces per bag at 300mg each, totaling 3000mg of cannabinoids. Crafted through a cryo infusion process, these edibles provide a consistent and potent effect, featuring a blend of Delta-9, Delta-11, and THC-P. For newcomers, it's advised to start with just 1/8 of an inch due to their extreme potency. Compliant with the 2018 Farm Bill, these edibles contain less than 0.3% Delta-9 THC by dry weight."
    },
    {
        name: "Good Day Farm: Pineapple | NANO Gummies | 20pk | 100mg",
        imgUrl: "https://leafly-public.imgix.net/products/photos/9Vu1h8NRQaiFN1LcXhBd_MO-Nano-Pineapple.png?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/9Vu1h8NRQaiFN1LcXhBd_MO-Nano-Pineapple.png?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "14.99",
        description: "Good Day Farm FAST-ACTING Nano-Emulsified Gummies will provide faster and more consistent results than traditional gummies. Our proprietary GDF7 Nano technology creates water soluble cannabinoids for faster absorption into the bloodstream resulting in an activation time of 0-15 minutes. This process creates a gummy that is optimal for micro-dosing and for those seeking a more consistent and fast-acting experience. And if that wasn't enough good news, our special formula is made with pectin so these sweet and citrusy Pineapple gummies are Vegan, Gluten Free and Made with Real Fruit!"
    },
    {
        name: "EXTREME BLEND DELTA-8, THC-P, DELTA-9 4000MG MIX FLAVORS",
        imgUrl: "https://leafly-public.imgix.net/products/photos/tBYvZaKRRPymoq7wHMBP_df7634fa-913b-4751-8fb2-aba045a71927?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/tBYvZaKRRPymoq7wHMBP_df7634fa-913b-4751-8fb2-aba045a71927?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "89.99",
        description: "Experience the wonders of blending Delta 8, Delta 9, and THC-P all in one with our Extra, Strength 4000MG D8 + D9 + THC-P Gummies! Packed with 200MG of hemp-derived cannabinoids in every gummy, these 20 mouth-watering gummies will have you blasting off to the moon and beyond!"
    },
    {
        name: "urb Delta D8/D9 THC Gummies - 3500mg Blue Watermelon",
        imgUrl: "https://leafly-public.imgix.net/products/photos/BIVYnVq9TfyD12y4XpW9_cbc88e88-638d-4f66-88eb-c02d807d6be7?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/BIVYnVq9TfyD12y4XpW9_cbc88e88-638d-4f66-88eb-c02d807d6be7?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "74.99",
        description: "Urb's Delta 8 and Delta 9 THC gummies are extra potent for cannabis enthusiasts. Combined with freshly frozen live resin, these gummies create a balanced body and head effect. Intended only for users with high tolerance. Pick from twelve mouth watering connoisseur flavors; Lavish Fresa, Spiked Kiwi, Apple Berri, Tropical Breeze, Berry Burst, Blue Watermelon, Knockout Punch, Voodoo Sunrise, Ruby Grapefruit, Island Peach, Passionfruit Margarita, and Waterberry."
    },
    {
        name: "Sour Watermelon Hybrid 100mg THC Fruit Chews - Missouri",
        imgUrl: "https://leafly-public.imgix.net/products/photos/y4T5L5FRRyTHx2b09lQr_7114bf42-62d4-448c-ba90-50f0e0734985?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/y4T5L5FRRyTHx2b09lQr_7114bf42-62d4-448c-ba90-50f0e0734985?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "9.99",
        description: "These fruit chews taste like a tart and juicy watermelon, with a pleasant balance of fruity and citrusy notes.These delicious fruit chews are a tasty and discreet way for you to medicate!They are also Vegan, Gluten Free, Dairy-Free, and contain NO High Fructose Corn Syrup."
    },
    {
        name: "Blue Raspberry Indica 100mg THC Fruit Chews - Utah",
        imgUrl: "https://leafly-public.imgix.net/products/photos/mngKAVpXR0mEtMgpoaTR_f1d9a2d0-0fb9-432c-b987-b8ca35bcdd1b?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/mngKAVpXR0mEtMgpoaTR_f1d9a2d0-0fb9-432c-b987-b8ca35bcdd1b?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "9.99",
        description: "These fruit chews taste like fresh raspberries, with a juicy and slightly tangy taste that is reminiscent of ripe berries.These delicious fruit chews are a tasty and discreet way for you to medicate!They are also Vegan, Gluten Free, Dairy-Free, and contain NO High Fructose Corn Syrup."
    },
    {
        name: "Cookies N Cream Brownie 100mg",
        imgUrl: "https://leafly-public.imgix.net/products/photos/CWGeQoiQtW9aNtAOffzw_Cookies-N-Cream-brownie-square.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/CWGeQoiQtW9aNtAOffzw_Cookies-N-Cream-brownie-square.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "19.99",
        description: "A fudge brownie featuring a top layer of cream frosting blended with chocolate cookie crumbles. 100mg THC"
    },
    {
        name: "Raspberry Cheesecake Brownie - 100mg",
        imgUrl: "https://leafly-public.imgix.net/products/photos/WoU5O2DOQumIzescKT2e_raspberry-cheesecake-brownie-square.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/WoU5O2DOQumIzescKT2e_raspberry-cheesecake-brownie-square.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "19.99",
        description: "High quality, consistently medicated, and outstanding flavor!"
    },
    {
        name: "Double Chocolate Brownie",
        imgUrl: "https://leafly-public.imgix.net/products/photos/QNjlLkDCS0Crdjdb4nPx_1a63b7c5-4a16-4ae1-89ad-0af6f23364f7?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/QNjlLkDCS0Crdjdb4nPx_1a63b7c5-4a16-4ae1-89ad-0af6f23364f7?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "19.99",
        description: "The OG of all cannabis edibles, the IncrediMeds Double Chocolate Brownie is rich, irresistible, and delivers chocolate fudgy goodness in every bite. Loaded with mini chocolate chips and infused with Full-Spectrum Hybrid Oil, this Brownie delivers a balanced and euphoric high. Warm it up before eating for a freshly baked high, and gooey chocolate experience. Crafted in small batches with all natural ingredients."
    },
    {
        name: "Chocolate Chip Brownie Square VERT Unlimited Brownies",
        imgUrl: "https://leafly-public.imgix.net/products/photos/w0Jo8xGlQwKeHQVWoXfh_Vert%20-%20Chocolate%20Chip%20Brownie.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/w0Jo8xGlQwKeHQVWoXfh_Vert%20-%20Chocolate%20Chip%20Brownie.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "14.99",
        description: "With double the chocolate for an ultimate sweet tooth cure, this dense, rich, fudge brownie has chocolate chip clusters spread throughout making every bite a balance of soft cookie and chocolate crunch."
    },
    {
        name: "Enjoyable 'Space Brownie' 100mg (Single)",
        imgUrl: "https://leafly-public.imgix.net/products/photos/fKkoG9x7QFWzFZ0k5AJR_Enjoyable-ProductImages-100-4.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/fKkoG9x7QFWzFZ0k5AJR_Enjoyable-ProductImages-100-4.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "19.99",
        description: "The Space Brownie is truly one of a kind. Made from scratch with the finest chocolate-brownie ingredients and mixed with a delicious chocolate chip cookie center! You'll be getting the best of both worlds in this concoction of enjoyableness. Each brownie is infused with 100mg's of top-quality cannabis THC oil. We know how tasty these can be so, don't forget to share."
    },
    {
        name: "HABIT 1000mg D8+D9 THC Syrup",
        imgUrl: "https://leafly-public.imgix.net/products/photos/qvOA3e4wRRaHEvA2anQ2_645e3f_345507b75e394f54b9a4c7bb8e6e4eef~mv2.jpg.webp?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/qvOA3e4wRRaHEvA2anQ2_645e3f_345507b75e394f54b9a4c7bb8e6e4eef~mv2.jpg.webp?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "45.99",
        description: "Habit's Nano-encapsulated, water soluble pourable syrups offer ultimate price to milligram value. Best suited for mixing beverages, but may also be dosed sublingually. Available in four delicious flavors; Strawberry Lemonade,Mango, Grape, and Watermelon. Habit water soluble syrups are easy to microdose or megadose making them a perfect choice for all experience levels."
    },
    {
        name: "CLOVR - 100mg - Chocolate Bar - 72 Venezuelan Dark",
        imgUrl: "https://leafly-public.imgix.net/products/photos/39cQ3G0wT6SoORTz4OMA_Clovr_Ven_Package.png?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/39cQ3G0wT6SoORTz4OMA_Clovr_Ven_Package.png?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "15.99",
        description: "CLOVR's signature dark chocolate bar is crafted from rare, single origin cocoa beans from Venezuela. The terroir along the Andean foothills and the coastline of the Caribbean Sea is perfect for growing this cacao.Like a nice, tannic red wine, this rich chocolate is full-bodied with a long-lasting finish. Dark chocolate contains antioxidants and flavinoids that are good for the mind, heart, and for your mood."
    },
    {
        name: "Cannabees Honey (THC) 100mg 10-pack",
        imgUrl: "https://leafly-public.imgix.net/products/photos/8QjV8j3DQI6DVg10qZoa_4574a9af-87db-4662-9734-8d271ece5f5d?auto=compress%2Cformat&w=302&dpr=1 1x, https://leafly-public.imgix.net/products/photos/8QjV8j3DQI6DVg10qZoa_4574a9af-87db-4662-9734-8d271ece5f5d?auto=compress%2Cformat&w=302&dpr=2 2x",
        price: "19.99",
        description: "Cannabees Honey is great on its own, mixed with your favorite drink or included in your next baking recipe. Each packet contains 10mg of THC or CBD at different strengths making it easy to know how much to consume for the most enjoyable experience. With so many uses, CannaBees Honey can be discreet, helping to find relief when most needed."
    },
    {
        name: "HABIT Grape 75Omg THC Syrup",
        imgUrl: "https://leafly-public.imgix.net/products/photos/1PLZeqi2TumlAEeZiFWY_grape-750mg-thc-d9-syrup.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/1PLZeqi2TumlAEeZiFWY_grape-750mg-thc-d9-syrup.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "44.99",
        description: "Habit's Nano-encapsulated, water soluble pourable syrups offer ultimate price to milligram value. Best suited for mixing beverages, but may also be dosed sublingually. Available in four delicious flavors; Strawberry Lemonade,Mango, Grape, and Watermelon. Habit water soluble syrups are easy to microdose or megadose making them a perfect choice for all experience levels."
    },
    {
        name: "Mini Krispies 360 MG - Berry",
        imgUrl: "https://leafly-public.imgix.net/products/photos/bYrelgbtRzKOb64fAG4w_berry.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/bYrelgbtRzKOb64fAG4w_berry.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "34.99",
        description: "Kushie Brand's Berry Mini Krispie offers a refreshingly sweet medicated treat for on-the-go medicating. Made with natural ingredients, each krispie contains 360mg of THC per unit."
    },
    {
        name: "Goodnight Honey - 100mg THC/50mg CBN",
        imgUrl: "https://leafly-public.imgix.net/products/photos/XHO85ARbKTdvaDsBXCAT_boxmock_goodnighthoney.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/XHO85ARbKTdvaDsBXCAT_boxmock_goodnighthoney.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "9.99",
        description: "We took Michigan's own Sleeping Bear Farm's Honey and infused with THC and CBN at a 2:1 ratio for the perfect nights sleep!"
    },
    {
        name: "The OG Cannabis Brownie",
        imgUrl: "https://leafly-public.imgix.net/products/photos/2d3yjPyUTSnahOxVombg_boxmock_ogbrownie.jpeg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/2d3yjPyUTSnahOxVombg_boxmock_ogbrownie.jpeg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "24.99",
        description: "If you are looking for a delicious baked treat look no further, with Michigan’s Premier Brownie! This delicious chocolaty brownie is made with the highest quality ingredients including our very own Cannalicious labs Distillate. This is a perfect treat to crave that sweet tooth while also putting you into a relaxed state. INGREDIENTS: Butter, sugar, flour, eggs, chocolate (unsweetened chocolate, sugar, cocoa butter, soy lecithin), potassium sorbate, vanilla, baking powder, salt, and cannabis extract. Contains milk and soy."
    },
    {
        name: "Grön THC Milk Chocolate Pips",
        imgUrl: "https://leafly-public.imgix.net/products/photos/WDinjHClSgC4JHrx0cQY_AZ-Milk-Chocolate-Pips.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/WDinjHClSgC4JHrx0cQY_AZ-Milk-Chocolate-Pips.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "19.99",
        description: "Decadent fair-trade chocolate covered in a colorful candy coating and infused with cannabis extract, Pips are the perfect bite-size edible for anyone looking for a sweet candy crunch. With twenty Pips per bag and 5mg THC per Pip, your first bite doesn't have to be your last."
    },
    {
        name: "Delta-8 Milk Chocolate",
        imgUrl: "https://leafly-public.imgix.net/products/photos/0yVyuOXRhWqinzMaLyHA_b72a5900-61ad-4b7a-9881-a21e6d9d1547?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/0yVyuOXRhWqinzMaLyHA_b72a5900-61ad-4b7a-9881-a21e6d9d1547?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "9.99",
        description: "Our silky Milk Chocolate Minis are perfect for those with a sweet tooth. Being so delicious and smooth, you can add these to any part of your day. Super naturally good with zero artificial flavors, colors or preservatives."
    }
]

const vapes = [
    {
        name: "BLUE DREAM SATIVA 510 THREAD THC BLEND CARTRIDGE 1G",
        imgUrl: "https://leafly-public.imgix.net/products/photos/UtYBxf8RJ6vfxbM3RHvg_2f7015d3-d9ca-4c63-a46e-86fe3db83c5e?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/UtYBxf8RJ6vfxbM3RHvg_2f7015d3-d9ca-4c63-a46e-86fe3db83c5e?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "29.99",
        description: "Aventus8 THC blend vape cartridges feature full spectrum cannabinoid and terpene blends conceived to give you the maximum effects."
    },
    {
        name: "TORCH BOSS CAKE THC-A LIVE RESIN DIAMONDS 510 CARTRIDGE 3.5G INDICA",
        imgUrl: "https://leafly-public.imgix.net/products/photos/gb7Ma0Y3QtWw7EkfVQ6M_3.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/gb7Ma0Y3QtWw7EkfVQ6M_3.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "44.99",
        description: "Indulge in the ultimate luxury with BOSS CAKE Torch THC-A Live Resin Diamonds 510 Cartridge 3.5G, available exclusively at Aventus8.com. This exceptional cartridge not only pushes the boundaries of potency but also sets a new standard for luxury in the hemp-derived scene. Crafted by Torch, renowned for its innovative and high-quality products, this is their first-ever cartridge, promising excellence at every puff. From meticulously designed packaging to cutting-edge hardware, the BOSS CAKE Torch THC-A Live Resin Diamonds Cartridge ensures an unparalleled vaping experience, now accessible on Aventus8.com."
    },
    {
        name: "THC SKYWALKER Full Spectrum 510 Thread Vape Cartridge 1000mg 1 gram",
        imgUrl: "https://leafly-public.imgix.net/products/photos/ZNdW2QtQRyZLuNP7NeMT_f77fbc60-ad4e-4d40-b8c4-c1ca9820739c?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/ZNdW2QtQRyZLuNP7NeMT_f77fbc60-ad4e-4d40-b8c4-c1ca9820739c?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "29.99",
        description: "THC blend vape cartridges feature full spectrum cannabinoid and terpene blends conceived to give you the maximum effects."
    },
    {
        name: "Sauce Carts XL Granddaddy Purp Delta 9 THC Full spectrum live resin Cart",
        imgUrl: "https://leafly-public.imgix.net/products/photos/AbL5R3gdTAqEQMF3Uvnh_834febd9-da9a-4060-aeca-92c30d2c318a?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/AbL5R3gdTAqEQMF3Uvnh_834febd9-da9a-4060-aeca-92c30d2c318a?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "29.99",
        description: "Sauce Carts 1500MG classic vape cart With an ultra-high potency of 87% THC and 12% CBD"
    },
    {
        name: "Delta 9 THC + CBD Berry Watermelon Weed Pen 2 gram Disposable Cannabis Oil Vape GAS",
        imgUrl: "https://leafly-public.imgix.net/products/photos/sezbAZHaSnW9t7L3hZ6z_1a5a3f0d-decd-46fd-a7eb-6331860d0eb8?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/sezbAZHaSnW9t7L3hZ6z_1a5a3f0d-decd-46fd-a7eb-6331860d0eb8?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "59.99",
        description: "Berry Watermelon blended w/ high grade cannabinoid oils Full Spectrum CBD with Delta 9 THC as a naturally occurring minor cannabinoid."
    },
    {
        name: "Disposable Vape Pen 2.5ml Infused with Live Resin + THCP - Pink Runtz - Indica",
        imgUrl: "https://leafly-public.imgix.net/products/photos/d58xjxuTtaKieAmnDdUA_b0e094bf-2924-49e0-bc10-f19166706c4f?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/d58xjxuTtaKieAmnDdUA_b0e094bf-2924-49e0-bc10-f19166706c4f?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "59.99",
        description: "THCP and Delta-8 (D8) disposable vape pen. Our Disposable Vape Pens provide one of the easiest and most enjoyable ways for consumers to take their daily dose of THCP and Delta 8 for relaxation. This is a convenient way to try all our strains so you can decide for yourself which are your favorites. Shop near me THCP and Delta-8 (D8) disposable vape pen."
    },
    {
        name: "1 Gram THCa Vape Pen Indica - Wedding Cake",
        imgUrl: "https://leafly-public.imgix.net/products/photos/omw5oi9fST653RFWc0m2_a9ef8907-3b6f-4d58-9156-5d6f4ed6819e?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/omw5oi9fST653RFWc0m2_a9ef8907-3b6f-4d58-9156-5d6f4ed6819e?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "29.99",
        description: "Our THC-A disposable vapes offer high quality distillate + terpene blends at the right price. The one gram vape is perfectly pocket sized and the $15 price tag is wallet friendly. They're discreet, rechargeable, and backed by a 100% Satisfaction Guarantee."
    },
    {
        name: "Torch THC-P LIVE RESIN Disposable Vape Funky Charms Hybrid 1G",
        imgUrl: "https://leafly-public.imgix.net/products/photos/JblVm9XNQaWGHsq9rvGT_145b4704-1e67-42b8-8ff3-35524f093ade?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/JblVm9XNQaWGHsq9rvGT_145b4704-1e67-42b8-8ff3-35524f093ade?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "29.99",
        description: "Profile: Sweet and fruity, with tones of mint and orange and a hint of spice.This live resin blend is crafted with pure THC-P only blend, delivering potent effects and robust flavor. Our enhanced Diamond 2.0 device features an LED display, postless dual airflow, and an improved battery for extended use between charges."
    },
    {
        name: "Runtz Delta-8 Vape Pen | Hybrid",
        imgUrl: "https://leafly-public.imgix.net/products/photos/elFnXOhPS66vr9cQ0ot3_Untitled-design-191.png?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/elFnXOhPS66vr9cQ0ot3_Untitled-design-191.png?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "24.99",
        description: "Loaded to the brim with 500mg of delta-8 THC distillate, our Delta-8 THC Disposable Vape Pen is as good as it gets. Additionally, each Vape Pen contains live resin terpenes that are sure to get your mouth-watering."
    },
    {
        name: "Viva La Hemp Kosmic Blend Disposable 3G Strawberry Lemonade (Sativa)",
        imgUrl: "https://leafly-public.imgix.net/products/photos/MGTrf4a8TxGxK4xqPOkH_6798f59b-24aa-4db5-b4b9-83a8d1571ea9?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/MGTrf4a8TxGxK4xqPOkH_6798f59b-24aa-4db5-b4b9-83a8d1571ea9?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "64.99",
        description: "Shop the Viva La Hemp Kosmic Blend Disposable, featuring 3 grams of delta 8, THC-A, THC-P and THC-JD, inside a preheating disposable vape with 300mAh battery."
    },
    {
        name: "The Clear Original Cartridge 1000mg | Lime Sorbet",
        imgUrl: "https://leafly-public.imgix.net/products/photos/xdmKBy9Sn6bO7szpP4cY_1d51b08a-8820-48af-989c-523e802ee372?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/xdmKBy9Sn6bO7szpP4cY_1d51b08a-8820-48af-989c-523e802ee372?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "29.99",
        description: "With a starting potency of well over 85% THC, the Original cartridge is perfect for the moderate to seasoned cannabis enthusiast. Lime Sorbet begins with a lime-like bite and finishes with a touch of sweet cream. This daytime, sativa-influenced flavor has an undeniable range and richness to it."
    },
    {
        name: "Lilikoi Blossom Ready-to-Use Refined Live Resin™ Pen",
        imgUrl: "https://leafly-public.imgix.net/products/photos/cOi1vTYBQGayDUF1MeS7_RTU-Battery-Cart-Box.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/cOi1vTYBQGayDUF1MeS7_RTU-Battery-Cart-Box.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "44.99",
        description: "Lilikoi Blossom Ready-to-Use Refined Live Resin™ Pen Strawberry Cloud x Slymer x Lychee Blossom (Tropical / Floral / Citrus)Sativa Hybrid"
    },
    {
        name: "Ghost Train Haze (Sativa)",
        imgUrl: "https://leafly-public.imgix.net/products/photos/Viv6ExORwSNrgBSguKXL_Ecommerce-Product-photos_Ghost-Train-Haze-Flavor-Card.png?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/Viv6ExORwSNrgBSguKXL_Ecommerce-Product-photos_Ghost-Train-Haze-Flavor-Card.png?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "34.99",
        description: "First bred by Rare Dankness, Ghost Train Haze is a sativa cross of Ghost OG and Neville’s Wreck. With a sour citrus and floral aroma, Ghost Train Haze delivers a potent dose of THC to knock out pain, depression, and appetite loss. Note that some patients who may be prone to anxiety should be cautious of this heavy-hitter. Low doses are conducive to concentration and creativity, but you may notice some cerebral haziness as you smoke more. Overall Ghost Train Haze is a suitable strain for an uplifted and energetic high."
    },
    {
        name: "Disposable Vape Delta 9 Wedding Cake Hybrid",
        imgUrl: "https://leafly-public.imgix.net/products/photos/mvw10jy2SpGBETkWqeio_86685595-1f9a-4c4c-9747-2f3d76e43582?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/mvw10jy2SpGBETkWqeio_86685595-1f9a-4c4c-9747-2f3d76e43582?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "29.99",
        description: "The Aventus8 Delta 9 THC disposable vaporizers offer a premium experience in a convenient and portable format. Each vaporizer contains 2 grams of hemp-derived Delta 9 THC, designed to deliver potent and consistent effects. Made with Live Rosin and other high-quality ingredients, these vaporizers are crafted in compliance with strict legal and federal regulations, ensuring a safe and reliable product. Perfect for those seeking discretion and convenience without sacrificing quality, the Aventus8 vaporizers are an excellent choice for enjoying Delta 9 THC anytime, anywhere."
    },
    {
        name: "Dime OG 1000mg All in One Device",
        imgUrl: "https://leafly-public.imgix.net/products/photos/HGfhy3CURsGbSkcw30PW_1000mg_All_In_One_SL_DO.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/HGfhy3CURsGbSkcw30PW_1000mg_All_In_One_SL_DO.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "29.99",
        description: "Our own OG strain was created by crossing Jet Fuel, Hardcore OG, and True OG. The flavor profile is meant to remind users of that picture perfect OG, like the one you could smell through a dime bag. With diesel, lemon, pine and sweet notes, this will quickly become one of your favorite flavors. Even though Dime OG is a heavy indica, the Jet Fuel will lift you off into that dream-like state and have you “thinking higher”."
    },
    {
        name: "Cosmic Cookies - 1.25 Grams - Hybrid - Designer Distillate",
        imgUrl: "https://leafly-public.imgix.net/products/photos/ttyPkhkYSz67QqXYBfUE_CAKE_Cosmic_Cookies.jpg?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/ttyPkhkYSz67QqXYBfUE_CAKE_Cosmic_Cookies.jpg?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "29.99",
        description: "A CAKE Team favorite. Celestial hints of sugar, starry sprinkles of earth, and a nebula of fragrant undertones. Undeniably irresistible."
    },
    {
        name: "Platinum Blend - Disposable Vape 9ML Fruit Smash - Sativa",
        imgUrl: "https://leafly-public.imgix.net/products/photos/KXAjPZHPTFeriitN09gW_c8044654-98bb-459c-ad77-7b32b98cfcc9?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/KXAjPZHPTFeriitN09gW_c8044654-98bb-459c-ad77-7b32b98cfcc9?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "129.99",
        description: "Fruit Smash: Refreshing Tropical Vape. Enjoy a burst of fruity goodness with Platinum Blend's 9 ML disposable vape in Fruit Smash. This vibrant blend features a medley of tropical fruit flavors, offering a refreshing and invigorating vaping experience. Fruit Smash provides a balanced high, combining uplifting and energizing effects with a mild sense of relaxation, making it a versatile choice for any time of day."
    },
    {
        name: "1 Gram THCa Vape Pen Sativa - Sour Diesel",
        imgUrl: "https://leafly-public.imgix.net/products/photos/5i1rxp1ASvDWrE2OugcR_ac843dc4-4148-4093-8a2a-72816333ed66?auto=compress%2Cformat&w=302&dpr=1%201x,%20https://leafly-public.imgix.net/products/photos/5i1rxp1ASvDWrE2OugcR_ac843dc4-4148-4093-8a2a-72816333ed66?auto=compress%2Cformat&w=302&dpr=2%202x",
        price: "29.99",
        description: "Our THC-A disposable vapes offer high quality distillate + terpene blends at the right price. The one gram vape is perfectly pocket sized and the $15 price tag is wallet friendly. They're discreet, rechargeable, and backed by a 100% Satisfaction Guarantee."
    }
]

export const seed = async () => {
    prerolls.map(async (item) => {
        // const obj = {
        //     name: item.name,
        //     imgUrl: item.imgUrl,
        //     type: item.type,
        //     price: item.price,
        //     description: item.description
        // }
        await db.select().from(productCategoryTable).where(eq(productCategoryTable.name, "Prerolls")).then(async (category) => {
            await db.update(prerollsTable).set({categoryID: category[0].id})

        })
        // await db.select().from(prerollsTable).where(eq(prerollsTable.name, item.name)).then(async (data) => {
            //     // await db.insert(prerollsInventoryTable).values({prerollsID: data[0].id, quantity:10, availability: true})
                
            // })
    })
    edibles.map(async (item) => {
        // const obj = {
        //     name: item.name,
        //     imgUrl: item.imgUrl,
        //     price: item.price,
        //     description: item.description
        // }
        // await db.select().from(ediblesTable).where(eq(ediblesTable.name, item.name)).then(async (data) => {
        //     await db.insert(ediblesInventoryTable).values({ediblesID: data[0].id, quantity:10, availability: true})
        // })
        await db.select().from(productCategoryTable).where(eq(productCategoryTable.name, "Edibles")).then(async (category) => {
            await db.update(ediblesTable).set({categoryID: category[0].id})

        })
    })

    vapes.map(async (item) => {
        // const obj = {
        //     name: item.name,
        //     imgUrl: item.imgUrl,
        //     price: item.price,
        //     description: item.description
        // }
        // await db.select().from(vapesTable).where(eq(vapesTable.name, item.name)).then(async (data) => {
        //     await db.insert(vapesInventoryTable).values({vapesID: data[0].id, quantity:10, availability: true})
        // })
        await db.select().from(productCategoryTable).where(eq(productCategoryTable.name, "Vapes")).then(async (category) => {
            await db.update(vapesTable).set({categoryID: category[0].id})

        })
    })
}