import {getClient} from "./mongo.db.js";

async function insertInfo(info){
    const client = getClient();
    try {
        await client.connect();
        await client.db("livraria").collection("livroInfo").insertOne(info);
    } catch (error) {
        throw error;
    }finally{
        await client.close();
    }
}

async function updateInfo(info){
    const client = getClient();
    try {
        await client.connect();
        await client.db("livraria").collection("livroInfo").updateOne(
            {livroId: info.livroId},
            {$set:{...info}}
        );
    } catch (error) {
        throw error;
    }finally{
        await client.close();
    }
}

async function getInfo(livroId){
    const client = getClient();
    try {
        await client.connect();
        return client.db("livraria").collection("livroInfo").findOne({livroId});
    } catch (error) {
        throw error;
    }finally{
       // await client.close();
    }
}

async function insertAvaliacao (avaliacao, livroId){
    try {
        const livroInfo = await getInfo(livroId);
        livroInfo.avaliacoes.push(avaliacao);
        await updateInfo(livroInfo);
    } catch (error) {
        throw error;
    }
}

async function deleteAvaliacao (livroId, index){
    try {
        const livroInfo = await getInfo(livroId);
        livroInfo.avaliacoes.splice(index, 1);
        await updateInfo(livroInfo);
    } catch (error) {
        throw error;
    }
}

async function deleteInfo(livroId){
    const client = getClient();
    try {
        await client.connect();
        await client.db("livraria").collection("livroInfo").deleteOne({livroId});
    } catch (error) {
        throw error;
    }finally{
       // await client.close();
    }
}

export default{
    insertInfo,
    updateInfo,
    getInfo,
    deleteInfo,
    insertAvaliacao,
    deleteAvaliacao
}