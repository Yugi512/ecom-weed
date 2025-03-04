import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import {DATABASE_URL} from "@/lib/config"

const sql = neon("postgresql://weed_owner:npg_T72zBlncyumZ@ep-royal-glitter-a5352joo-pooler.us-east-2.aws.neon.tech/weed?sslmode=require");
const db = drizzle({ client: sql });
export default db;