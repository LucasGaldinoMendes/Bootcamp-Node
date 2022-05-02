import Proprietario from "../models/proprietario.model.js";

async function insertProprietario (proprietario){
    try {
        return await Proprietario.create(proprietario);
    } catch (error) {
        throw error;
    }
}

async function getProprietarios(){
    try {
       return await Proprietario.findAll();
    } catch (error) {
        throw error;
    }
}

async function getProprietario(id){
    try {
       return await Proprietario.findByPk(id);
    } catch (error) {
        throw error;
    }
}

async function updateProprietario(proprietario){
    try {
        await Proprietario.update(proprietario,{
            where:{
                proprietarioId: proprietario.proprietarioId
            }
        });
        return await getProprietario(proprietario.proprietarioId);
    } catch (error) {
        throw error;
    }
}

async function deleteProprietario(id){
    try {
        await Proprietario.destroy({
            where: {
                proprietarioId: id
            }
        });
    } catch (error) {
        throw error;
    }
}

export default{
    insertProprietario,
    getProprietarios,
    getProprietario,
    updateProprietario,
    deleteProprietario
};