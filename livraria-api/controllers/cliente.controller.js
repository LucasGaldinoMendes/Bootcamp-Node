import ClienteService from "../services/cliente.service.js";

async function createCliente (req, res, next){
    try {
        let cliente = req.body;
        if(!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone ||!cliente.endereco){
            throw new Error("Nome, email, senha, telefone e endereço são obrigatórios");
        }
        res.send(await ClienteService.createCliente(cliente));
        global.logger.info(`POST /cliente - ${JSON.stringify(cliente)}`);
    } catch (error) {
        next(error);
    }
}

async function updateCliente (req, res, next){
    try {
        let cliente = req.body;
        if(!cliente.cliente_id ||!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone ||!cliente.endereco){
            throw new Error("Id, nome, email, senha, telefone e endereço são obrigatórios");
        }
        res.send(await ClienteService.updateCliente(cliente));
        global.logger.info(`PUT /cliente - ${JSON.stringify(cliente)}`);
    } catch (error) {
        next(error);
    }
}

async function getClientes (req, res, next){
    try {
        res.send(await ClienteService.getClientes());
        global.logger.info(`get /cliente`);
    } catch (error) {
        next(error);
    }
}

async function getCliente (req, res, next){
    try {
        let id = parseInt(req.params.id);
        if (!id || !Number.isInteger(id)) {
            throw new Error("Id é obrigatório");
        }
        res.send(await ClienteService.getCliente(id));
        global.logger.info(`get /cliente/:id - ${id}`);
    } catch (error) {
        next(error);
    }
}

async function deleteCliente (req, res, next){
    try {
        let id = parseInt(req.params.id);
        if (!id || !Number.isInteger(id)) {
            throw new Error("Id é obrigatório");
        }
        res.send(await ClienteService.deleteCliente(id));
        global.logger.info(`delete /cliente `);
    } catch (error) {
        next(error);
    }
}

export default{
    createCliente,
    updateCliente,
    getClientes,
    getCliente,
    deleteCliente
};