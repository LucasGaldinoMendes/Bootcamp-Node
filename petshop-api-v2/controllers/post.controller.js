import PostService from "../services/post.service.js";

async function createPosts(req, res, next){
    try {
        let post = req.body;
        if (!post.titulo || !post.conteudo) {
            throw new Error("Titulo e conteudo são obrigatorios");
        }
        res.send(await PostService.createPosts(post));
        global.logger.info(`POST /post - ${JSON.stringify(post)}`);
    } catch (error) {
        next(error);
    }
}

async function getPosts(req, res, next){
    try {
        res.send(await PostService.getPosts());
        global.logger.info(`GET /post `);       
    } catch (error) {
        next(error);
    } 
}

async function createComentario(req, res, next){
    try {
        let postId = req.body._id;
        let comentario = {nome: req.body.nome, conteudo: req.body.conteudo};
        if (!postId || !comentario.nome || !comentario.conteudo) {
            throw new Error("Nome e conteudo são obrigatórios");
        }
        res.send(await PostService.createComentario(comentario, postId));
    } catch (error) {
        next(error);
    }
}

export default{
    createPosts,
    getPosts,
    createComentario
}