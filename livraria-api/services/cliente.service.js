import ClienteRepository from "../repositories/cliente.repository.js";
import basicAuth from "express-basic-auth";

async function createCliente(cliente){
    if (await ClienteRepository.getEmail(cliente.emal)> 0) {
        throw new Error("Esse email já consta na base de dados, por favor utilize outro endereço");
    }
    return await ClienteRepository.insertCliente(cliente);
}

async function updateCliente(cliente){
    let errors;
    if(!await ClienteRepository.getCliente(cliente.cliente_id)){
       errors = "Id do cliente não consta na base de dados. ";
    }
    if (await ClienteRepository.getEmail(cliente.emal)> 0) {
        errors += "Esse email já consta na base de dados, por favor utilize outro endereço";
    }
    if(errors){
        throw new Error(erros);
    }
    return await ClienteRepository.updateCliente(cliente);
}

async function getClientes(){
    return await ClienteRepository.getClientes();
}

async function getCliente(id){
    return await ClienteRepository.getCliente(id);
}

async function deleteCliente(id){
    if (!await ClienteRepository.getCliente(id)) {
        throw new Error("Id do cliente não consta na base de dados");
    }
    return await ClienteRepository.deleteCliente(id);
}

async function verifyLogin(email, senha){
    const password = await ClienteRepository.getCredentials(email);
    if(!password){
        return false;
    }
    return basicAuth.safeCompare(password, senha);
}

export default{
    createCliente,
    updateCliente,
    getClientes,
    getCliente,
    deleteCliente,
    verifyLogin
};