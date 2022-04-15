import {connect} from "./db.js";

async function insertAnimal (animal){
    const conn = await connect();
    try {
        const sql = "INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) returning *";
        const values = [animal.nome, animal.tipo, animal.proprietario_id];
        const res = await conn.query(sql,values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }  
}

async function getAnimals(){
    const conn = await connect();
    try {
        const sql = "select * from animais";
        const res = await conn.query(sql);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getAnimalsByProPrietarioId(product_id){
    const conn = await connect();
    try {
        const sql = "select * from animais where proprietario_id = $1";
        const res = await conn.query(sql,[product_id]);
        return res.rows;
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function getAnimal(id){
    const conn = await connect();
    try {
        const sql = "select * from animais where animal_id = $1";
        const values = [id];
        const res = await conn.query(sql,values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function updateAnimal(animal){
    const conn = await connect();
    try {
        const sql = "update animais set nome = $1, tipo = $2, proprietario_id = $3 where animal_id = $4 returning *";
        const values = [animal.nome, animal.tipo, animal.proprietario_id, animal.animal_id];
        const res = await conn.query(sql,values);
        return res.rows[0];
    } catch (error) {
        throw error;
    }finally{
        conn.release();
    }
}

async function deleteAnimal(id){
    const conn = await connect();
    try {
        const sql = "delete from animais where animal_id = $1";
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
    insertAnimal,
    getAnimals,
    getAnimalsByProPrietarioId,
    getAnimal,
    updateAnimal,
    deleteAnimal
}