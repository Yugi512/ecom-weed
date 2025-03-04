import { defineConfig } from "drizzle-kit";
import { DATABASE_URL } from './lib/config';

export default defineConfig({
    out: './migrations',
    schema: './database/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: DATABASE_URL!,
    },
});
