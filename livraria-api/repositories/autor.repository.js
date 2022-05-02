import {connect} from "./db.js";

async function insertAutor(autor){
    const conn = await connect();
    try {
        const sql = "insert into autores (nome, email, telefone) values ($1,$2, $3) returning *";
        const values = [autor.nome, autor.email, autor.telefone];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function updateAutor(autor){
    const conn = await connect();
    try {
        const sql = "update autores set nome = $1, email = $2, telefone = $3 where autor_id = $4 returning *";
        const values = [autor.nome, autor.email, autor.telefone, autor.autor_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getAutores(){
    const conn = await connect();
    try {
        const sql = "select * from  autores";
        const res = await conn.query(sql);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getAutor(id){
    const conn = await connect();
    try {
        const sql = "select * from  autores where autor_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function deleteAutor(id){
    const conn = await connect();
    try {
        const sql = "delete from  autores where autor_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return ;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

export default{
    insertAutor,
    updateAutor,
    getAutores,
    getAutor,
    deleteAutor
};