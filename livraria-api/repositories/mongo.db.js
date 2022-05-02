import mongodb from "mongodb";
import bd from "../config/mongodb.config.js";

function getClient(){
    const uri = bd.uri;
    return new mongodb.MongoClient(uri);
}

export{getClient}; 