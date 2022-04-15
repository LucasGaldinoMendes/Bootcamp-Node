import ServicoService from "../services/servico.service.js";

async function createServico(req, res, next){
    try {
        let servico = req.body;
        if (!servico.descricao || !servico.valor || !servico.animalId) {
            throw new Error("Descricao, vakir e id do animal são obrigatórios")
        }
        res.send(await ServicoService.createServico(servico));
        global.logger.info(`POST /servico - ${JSON.stringify(servico)}`);
    } catch (error) {
        next(error);
    } 
}

async function getServicos(req, res, next){
    try {
        res.send(await ServicoService.getServicos(req.query.proprietario_id));
        global.logger.info(`GET /servico`);
    } catch (error) {
        next(error);
    }
}

async function getServico(req, res, next){
    try {
        let id = req.params.id;
        if (!id) {
            throw new Error("Id é obrigatório")
        }
        res.send(await ServicoService.getServico(id));
        global.logger.info(`GET /servico/:id - ${id}`);
    } catch (error) {
        next(error);
    }
}

async function updateServico(req, res, next){
    try {
        let servico = req.body;
        if (!servico.servicoId || !servico.descricao || !servico.valor || !servico.animalId) {
            throw new Error("Id do servico, valor, descrição e id do animal são obrigatórios")
        }
        servico = await ServicoService.updateServico(servico);
        res.send(servico);
        global.logger.info(`PUT /servico - ${JSON.stringify(servico)}`);
    } catch (error) {
        next(error);
    }
}

async function deleteServico(req, res, next){
    try {
        let id = req.params.id;
        if (!id) {
            throw new Error("Id é obrigatório")
        }
        res.send(await ServicoService.deleteServico(id));
        global.logger.info(`DELETE /servico - ${id}`);
    } catch (error) {
        next(error);
    }
}

export default{
    createServico,
    getServicos,
    getServico,
    updateServico,
    deleteServico
}