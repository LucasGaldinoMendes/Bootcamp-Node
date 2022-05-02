import LivroService from "../services/livro.service.js";

async function createLivro (req, res, next){
    try {
        let livro = req.body;
        if(!livro.nome || !livro.valor || !livro.estoque || !livro.autor_id){
            throw new Error("Nome, valor, estoque e id do autor são obrigatórios");
        }
        res.send(await LivroService.createLivro(livro));
        global.logger.info(`POST /livro - ${JSON.stringify(livro)}`);
    } catch (error) {
        next(error);
    }
}

async function updateLivro (req, res, next){
    try {
        let livro = req.body;
        if(!livro.livro_id || !livro.valor || !livro.estoque){
            throw new Error("Id, valor e estoque são obrigatórios");
        }
        res.send(await LivroService.updateLivro(livro));
        global.logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
    } catch (error) {
        next(error);
    }
}

async function getLivros (req, res, next){
    try {
        res.send(await LivroService.getLivros(req.query.autorId));
        global.logger.info(`get /livro`);
    } catch (error) {
        next(error);
    }
}

async function getLivro (req, res, next){
    try {
        let id = parseInt(req.params.id);
        if (!id || !Number.isInteger(id)) {
            throw new Error("Id é obrigatório");
        }
        res.send(await LivroService.getLivro(id));
        global.logger.info(`get /livro/:id - ${id}`);
    } catch (error) {
        next(error);
    }
}

async function deleteLivro (req, res, next){
    try {
        let id = parseInt(req.params.id);
        if (!id || !Number.isInteger(id)) {
            throw new Error("Id é obrigatório");
        }
        res.send(await LivroService.deleteLivro(id));
        global.logger.info(`delete /livro `);
    } catch (error) {
        next(error);
    }
}

async function createInfo (req, res, next){
    try {
        let info = req.body;
        if (!info.livroId) {
            throw new Error("ID do livro e informações são obrigatórios");
        }
        res.send(await LivroService.createInfo(info));
        global.logger.info(`POST /livro/info - ${JSON.stringify(info)}`);
    } catch (error) {
        next(error);
    }
}

async function updateInfo (req, res, next){
    try {
        let info = req.body;
        if (!info.livroId) {
            throw new Error("ID do livro e informações são obrigatórios");
        }
        res.send(await LivroService.updateInfo(info));
        global.logger.info(`PUT /livro/info - ${JSON.stringify(info)}`);
    } catch (error) {
        next(error);
    }
}

async function deleteInfo (req, res, next){
    try {
        let id = parseInt(req.params.id);
        if (!id) {
            throw new Error("Id é obrigatório");
        }
        res.send(await LivroService.deleteInfo(id));
        global.logger.info(`delete /livro/info `);
    } catch (error) {
        next(error);
    }
}

async function createAvaliacao (req, res, next){
    try {
        let avaliacao = req.body;
        const livroId = parseInt(req.params.id);
        if (!avaliacao || !livroId || !Number.isInteger(livroId)) {
            throw new Error("ID do livro e informações são obrigatórios");
        }
        res.send(await LivroService.createAvaliacao(avaliacao, livroId));
        global.logger.info(`POST /livro/:id/avaliacao - ${JSON.stringify(avaliacao)}`);
    } catch (error) {
        next(error);
    }
}

async function deleteAvaliacao (req, res, next){
    try {
        let id = parseInt(req.params.id);
        let index = parseInt(req.params.index);
        if (!id || !Number.isInteger(id) || !index || !Number.isInteger(index)) {
            throw new Error("Id e index são obrigatórios");
        }
        res.send(await LivroService.deleteAvaliacao(id, index));
        global.logger.info(`delete /livro/:id/avaliacao/:index `);
    } catch (error) {
        next(error);
    }
}

export default {
    createLivro,
    updateLivro,
    deleteLivro,
    getLivro,
    getLivros,
    createInfo,
    updateInfo,
    deleteInfo,
    createAvaliacao,
    deleteAvaliacao
}