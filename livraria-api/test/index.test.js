import app from "../app.js";
import request from "supertest";
import AutorRepository from "../repositories/autor.repository";
import ClienteRepository from "../repositories/cliente.repository.js";
import LivroRepository from "../repositories/livro.repository.js";
import VendaRepository from "../repositories/venda.repository.js";

jest.setTimeout(9000);

const autor = {
    nome: "autor de teste",
    email: "autordeteste@gmail.com",
    telefone: "999999"
}

const livro = {
    nome: "livro de teste",
    valor: "100",
    estoque: 5,
    autor_id: null
}

const cliente = {
    nome: "cliente de teste",
    email: "clientedeteste@gmail.com",
    senha: "123456",
    telefone: '1999999',
    endereco: 'rua de teste'
}

const venda = {
    valor: "100",
    data: "2000-01-02T02:00:00.000Z",
    cliente_id: null,
    livro_id: null
}

const admin = "admin";
const passwordAdmin = "desafio-igti-nodejs";
let emailCliente = cliente.email;
let passwordCliente = cliente.senha;

test("Cenario 01 - Inclusão autor", async () => {
    let res = await request(app).post("/autor").send(autor).auth(admin,passwordAdmin);
    autor.autor_id = res.body.autor_id;
    expect(res.body).toMatchObject(autor);
    expect(res.status).toBe(200);

    res = await request(app).get(`/autor/${autor.autor_id}`).auth(admin,passwordAdmin);
    expect(res.body).toMatchObject(autor);
    expect(res.status).toBe(200);

    
    livro.autor_id = autor.autor_id;
    res = await request(app).post("/livro").send(livro).auth(admin,passwordAdmin);
    livro.livro_id = res.body.livro_id;
    expect(res.body).toMatchObject(livro);
    expect(res.status).toBe(200);

    res = await request(app).get(`/livro/${livro.livro_id}`).auth(admin,passwordAdmin);
    expect(res.body).toMatchObject(livro);
    expect(res.status).toBe(200);

    res = await request(app).post("/cliente").send(cliente).auth(admin,passwordAdmin);
    delete cliente.senha;
    expect(res.body).toMatchObject(cliente);
    expect(res.status).toBe(200);
    cliente.cliente_id = res.body.cliente_id;

    res = await request(app).get(`/cliente/${cliente.cliente_id}`).auth(admin,passwordAdmin);
    expect(res.body).toMatchObject(cliente);
    expect(res.status).toBe(200);

    res = await request(app).get(`/livro/${livro.livro_id}`).auth(emailCliente, passwordCliente);
    expect(res.body).toMatchObject(livro);
    expect(res.status).toBe(200);

    venda.cliente_id = cliente.cliente_id;
    venda.livro_id = livro.livro_id;
    res = await request(app).post("/venda").send(venda).auth(emailCliente,passwordCliente);
    venda.venda_id = res.body.venda_id;
    console.log(venda)
    expect(res.body).toMatchObject(venda);
    expect(res.status).toBe(200);

    res = await request(app).get(`/venda/${venda.venda_id}`).auth(emailCliente,passwordCliente);
    expect(res.body).toMatchObject(venda);
    expect(res.status).toBe(200);

    await VendaRepository.deleteVenda(venda.venda_id);
    await LivroRepository.deleteLivro(livro.livro_id);
    await AutorRepository.deleteAutor(autor.autor_id);
    await ClienteRepository.deleteCliente(cliente.cliente_id);
});


