import AnimalRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.repository.js";

async function createAnimal(animal){
    if (!await ProprietarioRepository.getProprietario(animal.proprietario_id)) {
        throw new Error("Id do proprietário informado não consta na base de dados")
    }
    return await AnimalRepository.insertAnimal(animal);
}

async function getAnimals(proprietario_id){
    if (proprietario_id) {
        return await AnimalRepository.getAnimalsByProPrietarioId(proprietario_id);
    }
    return await AnimalRepository.getAnimals();
}

async function getAnimal(id){
    return await AnimalRepository.getAnimal(id);
}

async function updateAnimal(animal){
    if (!await ProprietarioRepository.getProprietario(animal.proprietario_id)) {
        throw new Error("Id do proprietário informado não consta na base de dados")
    }
    return await AnimalRepository.updateAnimal(animal);
}

async function deleteAnimal(id){
    return await AnimalRepository.deleteAnimal(id);
}

export default{
    createAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
    deleteAnimal
}