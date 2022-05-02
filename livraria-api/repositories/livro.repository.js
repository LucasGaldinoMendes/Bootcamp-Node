import {connect} from "./db.js";

async function insertLivro(livro){
    const conn = await connect();
    try {
        const sql = "insert into livros (nome, valor, estoque, autor_id) values ($1,$2, $3, $4)  returning *";
        const values = [livro.nome, livro.valor, livro.estoque, livro.autor_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function updateLivro(livro){
    const conn = await connect();
    try {
        const sql = "update livros set valor = $1, estoque = $2 where livro_id = $3 returning *";
        const values = [livro.valor, livro.estoque, livro.livro_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function deleteLivro(id){
    const conn = await connect();
    try {
        const sql = "delete from livros where livro_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return ;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getLivro(id){
    const conn = await connect();
    try {
        const sql = "select * from livros where livro_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getLivros(){
    const conn = await connect();
    try {
        const sql = "select * from livros";
        const res = await conn.query(sql);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getLivrosByAutorId(id){
    const conn = await connect();
    try {
        const sql = "select * from livros where autor_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

export default {
    insertLivro,
    updateLivro,
    deleteLivro,
    getLivro,
    getLivros,
    getLivrosByAutorId
}