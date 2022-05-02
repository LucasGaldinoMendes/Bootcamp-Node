import {getClient} from "./mongo.db.js";
import {ObjectId} from "mongodb";

async function createPosts(posts){
    const client = getClient();
    try {
        await client.connect();
        await client.db("petshop").collection("posts").insertOne(posts);
    } catch (error) {
        throw error;
    }finally{
        await client.close();
    }
}

async function getPosts(){
    const client = getClient();
    try {
        await client.connect();
        const post= await client.db("petshop").collection("posts").find({}).toArray();
        return post;
    } catch (error) {
        throw error;
    }finally{
       // await client.close();
    }
}

async function getPost(postId){
    const client = getClient();
    try {
        await client.connect();
        //let id = new ObjectId(postId);
        const post =  await client.db("petshop").collection("posts").findOne({_id: ObjectId(postId)});
        return post;
    } catch (error) {
        throw error;
    }finally{
         await client.close();
    }
}

async function createComentario (comentario, postId){
    const posts = await getPost(postId);
    const client = getClient();
    try {
        await client.connect();
        posts.comentarios.push(comentario);
        await client.db("petshop").collection("posts").updateOne(
            {_id: ObjectId(postId)},
            {$set:{...posts}}
        );
        return posts.comentarios;
    } catch (error) {
        throw error;
    }finally{
        await client.close();
    }
}


export default {
    createPosts,
    getPosts,
    createComentario
}; 