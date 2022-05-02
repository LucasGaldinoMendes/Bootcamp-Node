import ClienteService from "../repositories/cliente.repository.js";

async function createCliente(cliente){
    return await ClienteService.insertCliente(cliente);
}

async function updateCliente(cliente){
    if(!await ClienteService.getCliente(cliente.cliente_id)){
        throw new Error("Id do cliente não consta na base de dados");
    }
    return await ClienteService.updateCliente(cliente);
}

async function getClientes(){
    return await ClienteService.getClientes();
}

async function getCliente(id){
    return await ClienteService.getCliente(id);
}

async function deleteCliente(id){
    if (!await ClienteService.getCliente(id)) {
        throw new Error("Id do cliente não consta na base de dados");
    }
    return await ClienteService.deleteCliente(id);
}

export default{
    createCliente,
    updateCliente,
    getClientes,
    getCliente,
    deleteCliente
};