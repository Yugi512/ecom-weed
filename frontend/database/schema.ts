import {
    varchar,
    uuid,
    integer,
    text,
    pgTable,
    date,
    pgEnum,
    timestamp, decimal, boolean
} from "drizzle-orm/pg-core";


// Users
export const userTable = pgTable("user",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    username: varchar("username",{length:16}).unique().notNull(),
    firstName: varchar("first_name",{length:30}).notNull(),
    lastName: varchar("last_name",{length:30}).notNull(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    role: pgEnum('role', ["USER","ADMIN"])().default('USER'),
    lastActivityDate: date("last_activity_date").defaultNow(),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow()
})


export const userAddressTable = pgTable("user_address",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    userID: uuid("user_id")
        .references(() => userTable.id)
        .notNull(),
    addressLineOne: text("address_line1"),
    addressLineTwo: text("address_line2"),
    city: text("city").notNull(),
    state: text("state").notNull(),
    zip: text("zip").notNull(),
    telephone: text("telephone").unique(),
    mobile: text("mobile").unique(),
})

export const productCategoryTable = pgTable("product_category",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    name: varchar("name").notNull().unique(),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

export const discountTable = pgTable("discount",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    name: varchar("name").unique(),
    description: text("description"),
    discountPercentage: decimal("discount_percentage"),
    active: boolean("active"),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

// flowers

export const flowerTable = pgTable("flower_products",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    name: varchar("name").unique().notNull(),
    imgUrl: varchar("img_url"),
    type: varchar("type"),
    price: decimal("price"),
    thcLevel: varchar("thc_level"),
    description: varchar("description"),
    mostCommonTerpene: varchar("most_common_terpene"),
    categoryID: uuid("category_id")
        .references(() => productCategoryTable.id),
    discountID: uuid("discount_id")
        .references(() => discountTable.id),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})


export const flowerInventoryTable = pgTable("flower_inventory",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    flowerID: uuid("flower_id")
        .references(() => flowerTable.id)
        .notNull(),
    quantity: integer("quantity"),
    availability: boolean("availability"),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

export const flowerEffectsTable = pgTable("flower_effects",{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    flowerID: uuid("flower_id")
        .references(() => flowerTable.id)
        .notNull(),
    effects: text("effects"),
})

// prerolls

export const prerollsTable = pgTable('prerolls',{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    name: varchar("name").unique().notNull(),
    imgUrl: varchar("img_url"),
    type: varchar("type"),
    price: decimal("price"),
    categoryID: uuid("category_id")
        .references(() => productCategoryTable.id),
    discountID: uuid("discount_id")
        .references(() => discountTable.id),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

export const prerollsInventoryTable = pgTable('prerolls_inventory',{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    prerollsID: uuid("prerolls_id")
        .references(() =>  prerollsTable.id)
        .notNull(),
    quantity: integer("quantity"),
    availability: boolean("availability"),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

// edibles

export const ediblesTable = pgTable('edibles',{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    name: varchar("name").unique().notNull(),
    imgUrl: varchar("img_url"),
    type: varchar("type"),
    price: decimal("price"),
    categoryID: uuid("category_id")
        .references(() => productCategoryTable.id),
    discountID: uuid("discount_id")
        .references(() => discountTable.id),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

export const ediblesInventoryTable = pgTable('edibles_inventory',{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    ediblesID: uuid("edibles_id")
        .references(() =>  ediblesTable.id)
        .notNull(),
    quantity: integer("quantity"),
    availability: boolean("availability"),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

// vapes

export const vapesTable = pgTable("vapes", {
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    name: varchar("name").unique().notNull(),
    imgUrl: varchar("img_url"),
    type: varchar("type"),
    price: decimal("price"),
    categoryID: uuid("category_id")
        .references(() => productCategoryTable.id),
    discountID: uuid("discount_id")
        .references(() => discountTable.id),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})

export const vapesInventoryTable = pgTable('vapes_inventory',{
    id: uuid("id").notNull().unique().defaultRandom().primaryKey(),
    vapesID: uuid("vape_id")
        .references(() =>  vapesTable.id)
        .notNull(),
    quantity: integer("quantity"),
    availability: boolean("availability"),
    createdAt: timestamp("created_at",{
        withTimezone: true
    }).defaultNow(),
    modifiedAt: timestamp("modified_at",{
        withTimezone: true
    }).defaultNow(),
    deleted_at: timestamp("deleted_at",{
        withTimezone: true
    }).defaultNow()
})
