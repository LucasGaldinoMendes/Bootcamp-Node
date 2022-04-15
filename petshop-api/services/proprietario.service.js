import ProprietarioRepository from "../repositories/proprietario.repository.js";
import AnimalRepository from "../repositories/animal.repository.js";

async function createProprietario(proprietario){
    return await ProprietarioRepository.insertProprietario(proprietario);
}

async function getProprietarios(){
    return await ProprietarioRepository.getProprietarios();
}

async function getProprietario(id){
    return await ProprietarioRepository.getProprietario(id);
}

async function updateProprietario(proprietario){
    return await ProprietarioRepository.updateProprietario(proprietario);
}

async function deleteProprietario(id){
    const prop = await AnimalRepository.getAnimalsByProPrietarioId(id);
    if (!prop) {
        throw new Error("Não é possível realizar a exclusão, esse proprietário tem animais associados a ele.")
    }
    return await ProprietarioRepository.deleteProprietario(id);
}

export default{
    createProprietario,
    getProprietarios,
    getProprietario,
    updateProprietario,
    deleteProprietario
}