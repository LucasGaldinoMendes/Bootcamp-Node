import {connect} from "./db.js";

async function insertVenda(venda){
    const conn = await connect();
    try {
        const sql = "INSERT INTO VENDAS (valor, data, cliente_id, livro_id) values ($1, $2, $3, $4) returning *";
        const values = [venda.valor, venda.data, venda.cliente_id, venda.livro_id];
        const res = await conn.query(sql,values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getVendas(){
    const conn = await connect();
    try {
        const sql = "select * from vendas";
        const res = await conn.query(sql);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getVenda(id){
    const conn = await connect();
    try {
        const sql = "select * from vendas where venda_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getVendasByClienteId(id){
    const conn = await connect();
    try {
        const sql = "select * from vendas where cliente_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getVendasByLivroId(id){
    const conn = await connect();
    try {
        const sql = "select * from vendas where livro_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getVendasByAutorId(id){
    const conn = await connect();
    try {
        const sql = "select * from vendas v inner join livros l on v.livro_id = l.livro_id where autor_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function deleteVenda(id){
    const conn = await connect();
    try {
        const sql = "delete from  vendas where venda_id = $1";
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
    insertVenda,
    getVendas,
    getVenda,
    getVendasByClienteId,
    getVendasByLivroId,
    getVendasByAutorId,
    deleteVenda
}