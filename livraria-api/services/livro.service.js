import LivroRepository from "../repositories/livro.repository.js";
import LivroInfoRepository from "../repositories/livroInfo.repository.js";
import AutorRepository from "../repositories/autor.repository.js";
import VendaRepository from "../repositories/venda.repository.js";

async function createLivro(livro){
    if(!await AutorRepository.getAutor(livro.autor_id)){
        throw new Error("Id do autor não consta na base de dados");
    }
    return await LivroRepository.insertLivro(livro);
}

async function updateLivro(livro){
    if(!await LivroRepository.getLivro(livro.livro_id)){
        throw new Error("Id do livro não consta na base de dados");
    }
    if(!await AutorRepository.getAutor(livro.autor_id)){
        throw new Error("Id do autor não consta na base de dados");
    }
    return await LivroRepository.updateLivro(livro);
}

async function deleteLivro(id){
    if(!await LivroRepository.getLivro(id)){
        throw new Error("Id do livro não encontrado");
    }
    const sales = await VendaRepository.getVendasByLivroId(id);
    if (sales.length > 0) {
        throw new Error("Livro já possui vendas. Não é possível realizar a exclusão");
    }
    return await LivroRepository.deleteLivro(id);
}

async function getLivros(autor_id){
    if(autor_id){
        return await LivroRepository.getLivrosByAutorId(autor_id);
    }
    return await LivroRepository.getLivros();
}

async function getLivro(id){
    const livro =  await LivroRepository.getLivro(id);
    livro.info = await LivroInfoRepository.getInfo(id);
    return {livro};

}

async function createInfo (info){
    if(!await LivroRepository.getLivro(info.livroId)){
        throw new Error("Id do livro não encontrado");
    }
    return await LivroInfoRepository.insertInfo(info);
}

async function updateInfo(info){
    if(!await LivroRepository.getLivro(info.livroId)){
        throw new Error("Id do livro não encontrado");
    }
    return await LivroInfoRepository.updateInfo(info);   
}

async function deleteInfo(id){
    if(!await LivroInfoRepository.getInfo(id)){
        throw new Error("Info do livro não encontrado");
    }
    return await LivroInfoRepository.deleteInfo(id);
}

async function createAvaliacao(avaliacao, livroId){
    if(!await LivroRepository.getLivro(livroId)){
        throw new Error("Id do livro não encontrado");
    }
    return await LivroInfoRepository.insertAvaliacao(avaliacao, livroId);
}

async function deleteAvaliacao(id, index){
    if(!await LivroRepository.getLivro(id)){
        throw new Error("Id do livro não encontrado");
    }
    return await LivroInfoRepository.deleteAvaliacao(id, index);
}

export default {
    createLivro,
    updateLivro,
    deleteLivro,
    getLivro,
    getLivros,
    createInfo,
    updateInfo,
    deleteInfo,
    createAvaliacao,
    deleteAvaliacao
}