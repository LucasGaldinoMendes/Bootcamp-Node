import Animal from "../models/animal.model.js";
import Servico from "../models/servico.model.js";

async function insertServico (servico){
    try {
        return await Servico.create(servico);
    } catch (error) {
        throw error;
    }
}

async function getServicos(){
    try {
       return await Servico.findAll();
    } catch (error) {
        throw error;
    }
}

async function getServicosByProprietarioId(proprietarioId){
    try {
        return await Servico.findAll({    
            include:[
            {
                model: Animal,
                where: {
                    proprietarioId
                }
            }]        
        });
    } catch (error) {
        throw error;
    }
}

async function getServico(id){
    try {
       return await Servico.findByPk(id)
    } catch (error) {
        throw error;
    }
}

async function updateServico(servico){
    try {
        await Servico.update(servico,{
            where:{
                servicoId: servico.servicoId
            }
        });
        return await getServico(servico.servicoId);
    } catch (error) {
        throw error;
    }
}

async function deleteServico(id){
    try {
        await Servico.destroy({
            where: {
                servicoId: id
            }
        })
    } catch (error) {
        throw error;
    }
}

export default{
    insertServico,
    getServicos,
    getServicosByProprietarioId,
    getServico,
    updateServico,
    deleteServico
}