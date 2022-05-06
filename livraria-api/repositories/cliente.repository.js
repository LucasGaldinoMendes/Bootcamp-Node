import {connect} from "./db.js";

async function insertCliente(cliente){
    const conn = await connect();
    try {
        const sql = "insert into clientes (nome, email, senha, telefone, endereco) values ($1,$2, $3, $4, $5) returning cliente_id, nome, email, telefone, endereco";
        const values = [cliente.nome, cliente.email, cliente.senha, cliente.telefone, cliente.endereco];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function updateCliente(cliente){
    const conn = await connect();
    try {
        const sql = "update clientes set nome = $1, email = $2, senha = $3, telefone = $4, endereco = $5 where cliente_id = $6 returning nome, email, telefone, endereco";
        const values = [cliente.nome, cliente.email, cliente.senha, cliente.telefone, cliente.endereco, cliente.cliente_id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getClientes(){
    const conn = await connect();
    try {
        const sql = "select cliente_id, nome, email, endereco  from  clientes";
        const res = await conn.query(sql);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getCliente(id){
    const conn = await connect();
    try {
        const sql = "select cliente_id, nome, email, endereco, telefone from  clientes where cliente_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function deleteCliente(id){
    const conn = await connect();
    try {
        const sql = "delete from  clientes where cliente_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return ;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getEmail(email){
    const conn = await connect();
    try {
        const sql = "select count(*) from  clientes where email = $1";
        const values = [email];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getCredentials(email){
    const conn = await connect();
    try {
        const sql = "select senha from  clientes where email = $1";
        const values = [email];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

export default{
    insertCliente,
    updateCliente,
    getClientes,
    getCliente,
    deleteCliente,
    getEmail,
    getCredentials
};