import VendaService from "../services/venda.service.js";

async function createVenda (req, res, next){
    try {
        let venda = req.body;
        if(!venda.cliente_id || !venda.livro_id || !venda.data){
            throw new Error("Data, id do cliente e id do livro, são obrigatórios");
        }
        res.send(await VendaService.createVenda(venda));
        global.logger.info(`POST /venda - ${JSON.stringify(venda)}`);
    } catch (error) {
        next(error);
    }
}

async function getVendas (req, res, next){
    try {
        res.send(await VendaService.getVendas(req.query.cliente_id, req.query.livro_id, req.query.autor_id));
        global.logger.info(`get /venda`);
    } catch (error) {
        next(error);
    }
}

async function getVenda (req, res, next){
    try {
        let id = parseInt(req.params.id);
        if (!id || !Number.isInteger(id)) {
            throw new Error("Id é obrigatório");
        }
        res.send(await VendaService.getVenda(id));
        global.logger.info(`get /venda/:id - ${id}`);
    } catch (error) {
        next(error);
    }
}

export default{
    createVenda,
    getVendas,
    getVenda
};