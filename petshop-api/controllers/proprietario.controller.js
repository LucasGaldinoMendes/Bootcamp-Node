import ProprietarioService from "../services/proprietario.service.js";

async function createProprietario(req, res, next){
    try {
        let proprietario = req.body;
        if (!proprietario.nome || !proprietario.telefone) {
            throw new Error("Nome, e telefone são obrigatórios")
        }
        res.send(await ProprietarioService.createProprietario(proprietario));
        global.logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);
    } catch (error) {
        next(error);
    } 
}

async function getProprietarios(req, res, next){
    try {
        res.send(await ProprietarioService.getProprietarios());
        global.logger.info(`GET /proprietario`);
    } catch (error) {
        next(error);
    }
}

async function getProprietario(req, res, next){
    try {
        let id = req.params.id;
        if (!id) {
            throw new Error("Id é obrigatório")
        }
        res.send(await ProprietarioService.getProprietario(id));
        global.logger.info(`GET /proprietario/:id - ${id}`);
    } catch (error) {
        next(error);
    }
}

async function updateProprietario(req, res, next){
    try {
        let proprietario = req.body;
        if (!proprietario.proprietario_id || !proprietario.nome || !proprietario.telefone) {
            throw new Error("Id do proprietario, nome e tipo são obrigatórios")
        }
        proprietario = await ProprietarioService.updateProprietario(proprietario);
        res.send(proprietario);
        global.logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
    } catch (error) {
        next(error);
    }
}

async function deleteProprietario(req, res, next){
    try {
        let id = req.params.id;
        if (!id) {
            throw new Error("Id é obrigatório")
        }
        res.send(await ProprietarioService.deleteProprietario(id));
        global.logger.info(`DELETE /proprietario - ${id}`);
    } catch (error) {
        next(error);
    }
}

export default{
    createProprietario,
    getProprietarios,
    getProprietario,
    updateProprietario,
    deleteProprietario
}