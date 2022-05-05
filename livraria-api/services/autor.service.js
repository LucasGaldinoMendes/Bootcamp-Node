import AutorRepository from "../repositories/autor.repository.js";

async function createAutor(autor){
    return await AutorRepository.insertAutor(autor);
}

async function updateAutor(autor){
    if(!await AutorRepository.getAutor(autor.id)){
        throw new Error("Id do autor não consta na base de dados");
    }
    return await AutorRepository.updateAutor(autor);
}

async function getAutores(){
    return await AutorRepository.getAutores();
}

async function getAutor(id){
    return await AutorRepository.getAutor(id);
}

async function deleteAutor(id){
    if(!await AutorRepository.getAutor(id)){
        throw new Error("Id do autor não consta na base de dados");
    }
    return await AutorRepository.deleteAutor(id);
}

export default{
    createAutor,
    updateAutor,
    getAutores,
    getAutor,
    deleteAutor
};