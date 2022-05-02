import AutorService from "../repositories/autor.repository.js";

async function createAutor(autor){
    return await AutorService.insertAutor(autor);
}

async function updateAutor(autor){
    if(!await AutorService.getAutor(autor.id)){
        throw new Error("Id do autor não consta na base de dados");
    }
    return await AutorService.updateAutor(autor);
}

async function getAutores(){
    return await AutorService.getAutores();
}

async function getAutor(id){
    return await AutorService.getAutor(id);
}

async function deleteAutor(id){
    if(!await AutorService.getAutor(id)){
        throw new Error("Id do autor não consta na base de dados");
    }
    return await AutorService.deleteAutor(id);
}

export default{
    createAutor,
    updateAutor,
    getAutores,
    getAutor,
    deleteAutor
};