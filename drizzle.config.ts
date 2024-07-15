import type {Config}from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({path: '.env'});

if (!process.env.DATABASE_URL){
    console.log('cannot find databse url')
}

export default {
    schema: '/home/kevin/Documents/notion-clone/src/lib/supabase/schema.ts',
    out: './migrations',
    driver: 'pg',
    dbCredentials:{
        connectionString:process.env.DATABASE_URL || '',
    },
}satisfies Config;