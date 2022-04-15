import AnimalRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.repository.js";

async function createAnimal(animal){
    if (!await ProprietarioRepository.getProprietario(animal.proprietarioId)) {
        throw new Error("Id do proprietário informado não consta na base de dados")
    }
    return await AnimalRepository.insertAnimal(animal);
}

async function getAnimals(proprietarioId){
    if (proprietarioId) {
        return await AnimalRepository.getAnimalsByProPrietarioId(proprietarioId);
    }
    return await AnimalRepository.getAnimals();
}

async function getAnimal(id){
    return await AnimalRepository.getAnimal(id);
}

async function updateAnimal(animal){
    if (!await ProprietarioRepository.getProprietario(animal.proprietarioId)) {
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