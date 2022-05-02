import pg from "pg";
import bd from "../config/db.config.js";

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString: bd.uri
    });
    global.connection = pool;
    return global.connection.connect();
}
export{
    connect
}

