import PostRepository from "../repositories/post.repository.js";

async function createPosts(post){
    return await PostRepository.createPosts(post);
}

async function getPosts(){
    return await PostRepository.getPosts();
}

async function createComentario(comentario, postId){
    return await PostRepository.createComentario(comentario, postId);
}

export default{
    createPosts,
    getPosts,
    createComentario
}