import mongodb from "mongodb";

function getClient(){
    const uri = "";
    return new mongodb.MongoClient(uri);
}

export{getClient}; 
