CREATE TABLE "discount" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar,
	"description" text,
	"discount_percentage" numeric,
	"active" boolean,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "discount_id_unique" UNIQUE("id"),
	CONSTRAINT "discount_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "edibles_inventory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"edibles_id" uuid NOT NULL,
	"quantity" integer,
	"availability" boolean,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "edibles_inventory_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "edibles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"img_url" varchar,
	"type" varchar,
	"price" numeric,
	"category_id" uuid,
	"discount_id" uuid,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "edibles_id_unique" UNIQUE("id"),
	CONSTRAINT "edibles_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "flower_effects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"flower_id" uuid NOT NULL,
	"effects" text,
	CONSTRAINT "flower_effects_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "flower_inventory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"flower_id" uuid NOT NULL,
	"quantity" integer,
	"availability" boolean,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "flower_inventory_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "flower_products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"img_url" varchar,
	"type" varchar,
	"price" numeric,
	"thc_level" varchar,
	"description" varchar,
	"most_common_terpene" varchar,
	"category_id" uuid,
	"discount_id" uuid,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "flower_products_id_unique" UNIQUE("id"),
	CONSTRAINT "flower_products_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "prerolls_inventory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"prerolls_id" uuid NOT NULL,
	"quantity" integer,
	"availability" boolean,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "prerolls_inventory_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "prerolls" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"img_url" varchar,
	"type" varchar,
	"price" numeric,
	"category_id" uuid,
	"discount_id" uuid,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "prerolls_id_unique" UNIQUE("id"),
	CONSTRAINT "prerolls_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "product_category" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "product_category_id_unique" UNIQUE("id"),
	CONSTRAINT "product_category_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "user_address" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"address_line1" text,
	"address_line2" text,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"zip" text NOT NULL,
	"telephone" text,
	"mobile" text,
	CONSTRAINT "user_address_id_unique" UNIQUE("id"),
	CONSTRAINT "user_address_telephone_unique" UNIQUE("telephone"),
	CONSTRAINT "user_address_mobile_unique" UNIQUE("mobile")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar(16) NOT NULL,
	"first_name" varchar(30) NOT NULL,
	"last_name" varchar(30) NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"role" "role" DEFAULT 'USER',
	"last_activity_date" date DEFAULT now(),
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "user_id_unique" UNIQUE("id"),
	CONSTRAINT "user_username_unique" UNIQUE("username"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "vapes_inventory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"vape_id" uuid NOT NULL,
	"quantity" integer,
	"availability" boolean,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "vapes_inventory_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "vapes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"img_url" varchar,
	"type" varchar,
	"price" numeric,
	"category_id" uuid,
	"discount_id" uuid,
	"created_at" timestamp with time zone DEFAULT now(),
	"modified_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "vapes_id_unique" UNIQUE("id"),
	CONSTRAINT "vapes_name_unique" UNIQUE("name")
);
--> statement-breakpoint
ALTER TABLE "edibles_inventory" ADD CONSTRAINT "edibles_inventory_edibles_id_edibles_id_fk" FOREIGN KEY ("edibles_id") REFERENCES "public"."edibles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "edibles" ADD CONSTRAINT "edibles_category_id_product_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."product_category"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "edibles" ADD CONSTRAINT "edibles_discount_id_discount_id_fk" FOREIGN KEY ("discount_id") REFERENCES "public"."discount"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "flower_effects" ADD CONSTRAINT "flower_effects_flower_id_flower_products_id_fk" FOREIGN KEY ("flower_id") REFERENCES "public"."flower_products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "flower_inventory" ADD CONSTRAINT "flower_inventory_flower_id_flower_products_id_fk" FOREIGN KEY ("flower_id") REFERENCES "public"."flower_products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "flower_products" ADD CONSTRAINT "flower_products_category_id_product_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."product_category"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "flower_products" ADD CONSTRAINT "flower_products_discount_id_discount_id_fk" FOREIGN KEY ("discount_id") REFERENCES "public"."discount"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prerolls_inventory" ADD CONSTRAINT "prerolls_inventory_prerolls_id_prerolls_id_fk" FOREIGN KEY ("prerolls_id") REFERENCES "public"."prerolls"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prerolls" ADD CONSTRAINT "prerolls_category_id_product_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."product_category"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "prerolls" ADD CONSTRAINT "prerolls_discount_id_discount_id_fk" FOREIGN KEY ("discount_id") REFERENCES "public"."discount"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vapes_inventory" ADD CONSTRAINT "vapes_inventory_vape_id_vapes_id_fk" FOREIGN KEY ("vape_id") REFERENCES "public"."vapes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vapes" ADD CONSTRAINT "vapes_category_id_product_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."product_category"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vapes" ADD CONSTRAINT "vapes_discount_id_discount_id_fk" FOREIGN KEY ("discount_id") REFERENCES "public"."discount"("id") ON DELETE no action ON UPDATE no action;