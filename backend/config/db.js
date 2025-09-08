import {neon} from "@neondatabase/serverless";
import dotenv from "dotenv";


dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// creates a SQL connection usign our env variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
);

// this sql function we export is used as a tagged tempalte literal, which allows us to write SQL queries safely

//#postgresql://neondb_owner:npg_g2dtBEuPVwc8@ep-twilight-dust-a8job35y-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require