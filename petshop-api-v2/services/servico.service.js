import ServicoRepository from "../repositories/servico.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createServico(servico){
    if (!await AnimalRepository.getAnimal(servico.animalId)) {
        throw new Error("Id do animal informado não consta na base de dados");
    }
    return await ServicoRepository.insertServico(servico);
}

async function getServicos(proprietarioId){
    if (proprietarioId) {
        return await ServicoRepository.getServicosByProprietarioId(proprietarioId);
    }
    return await ServicoRepository.getServicos();
}

async function getServico(id){
    return await ServicoRepository.getServico(id);
}

async function updateServico(servico){
    if (!await AnimalRepository.getAnimal(servico.animalId)) {
        throw new Error("Id do animal informado não consta na base de dados");
    }
    return await ServicoRepository.updateServico(servico);
}

async function deleteServico(id){
    return await ServicoRepository.deleteServico(id);
}

export default{
    createServico,
    getServicos,
    getServico,
    updateServico,
    deleteServico
};