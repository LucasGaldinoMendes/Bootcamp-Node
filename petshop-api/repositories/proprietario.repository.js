import {connect} from "./db.js";

async function insertProprietario (proprietario){
    const conn = await connect();
    try {
        const sql = "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) returning *";
        const values = [proprietario.nome, proprietario.telefone];
        const res = await conn.query(sql,values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }  
}

async function getProprietarios(){
    const conn = await connect();
    try {
        const sql = "select * from proprietarios";
        const res = await conn.query(sql);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getProprietario(id){
    const conn = await connect();
    try {
        const sql = "select * from proprietarios where proprietario_id = $1";
        const values = [id];
        const res = await conn.query(sql,values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function updateProprietario(proprietario){
    const conn = await connect();
    try {
        const sql = "update proprietarios set nome = $1, telefone = $2 where proprietario_id = $3 returning *";
        const values = [proprietario.nome, proprietario.telefone, proprietario.proprietario_id];
        const res = await conn.query(sql,values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function deleteProprietario(id){
    const conn = await connect();
    try {
        const sql = "delete from proprietarios where proprietario_id = $1";
        const values = [id];
        const res = await conn.query(sql,values);
        return ;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

export default{
    insertProprietario,
    getProprietarios,
    getProprietario,
    updateProprietario,
    deleteProprietario
}