import VendaRepository from "../repositories/venda.repository.js";
import ClienteRepository from "../repositories/cliente.repository.js";
import LivroRepository from "../repositories/livro.repository.js";

async function createVenda(venda){
    let errors;
    if(!await ClienteRepository.getCliente(venda.cliente_id)){
        errors = "Id do cliente não consta na base de dados. ";
    }
    const livro = await LivroRepository.getLivro(venda.livro_id);
    if(!livro){
        errors = "Id do livro não consta na base de dados. ";
    }
    if (livro.estoque < 1) {
        errors = "O livro informado não está disponível em nosso estoque. ";
    }
    if(errors){
        throw new Error(errors);
    }
    livro.estoque--;
    LivroRepository.updateLivro(livro);
    venda.valor = livro.valor;
    return await VendaRepository.insertVenda(venda);
}

async function getVendas(cliente_id, livro_id, autor_id){
    if(cliente_id){
        return await VendaRepository.getVendasByClienteId(cliente_id);
    }
    if(livro_id){
        return await VendaRepository.getVendasByLivroId(livro_id);
    }
    if(autor_id){
        return await VendaRepository.getVendasByAutorId(autor_id);
    }
    return await VendaRepository.getVendas();
}

async function getVenda(id){
    return await VendaRepository.getVenda(id);
}

export default{
    createVenda,
    getVendas,
    getVenda
}