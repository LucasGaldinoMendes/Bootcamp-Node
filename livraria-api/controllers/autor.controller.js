import AutorService from "../services/autor.service.js";

async function createAutor (req, res, next){
    try {
        let autor = req.body;
        if(!autor.nome || !autor.email || !autor.telefone){
            throw new Error("Nome, email e telefone são obrigatórios");
        }
        res.send(await AutorService.createAutor(autor));
        global.logger.info(`POST /autor - ${JSON.stringify(autor)}`);
    } catch (error) {
        next(error);
    }
}

async function updateAutor (req, res, next){
    try {
        let autor = req.body;
        if(!autor.autor_id || !autor.nome || !autor.email || !autor.telefone){
            throw new Error("Id, nome, email e telefone são obrigatórios");
        }
        res.send(await AutorService.updateAutor(autor));
        global.logger.info(`PUT /autor - ${JSON.stringify(autor)}`);
    } catch (error) {
        next(error);
    }
}

async function getAutores (req, res, next){
    try {
        res.send(await AutorService.getAutores());
        global.logger.info(`get /autor`);
    } catch (error) {
        next(error);
    }
}

async function getAutor (req, res, next){
    try {
        let id = parseInt(req.params.id);
        if (!id || !Number.isInteger(id)) {
            throw new Error("Id é obrigatório");
        }
        res.send(await AutorService.getAutor(id));
        global.logger.info(`get /autor/:id - ${id}`);
    } catch (error) {
        next(error);
    }
}

async function deleteAutor (req, res, next){
    try {
        let id = parseInt(req.params.id);
        if (!id || !Number.isInteger(id)) {
            throw new Error("Id é obrigatório");
        }
        res.send(await AutorService.deleteAutor(id));
        global.logger.info(`delete /autor`);
    } catch (error) {
        next(error);
    }
}

export default{
    createAutor,
    updateAutor,
    getAutores,
    getAutor,
    deleteAutor
};