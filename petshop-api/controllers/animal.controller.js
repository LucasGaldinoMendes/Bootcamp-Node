import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next){
    try {
        let animal = req.body;
        if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
            throw new Error("Nome, tipo e id do proprietário são obrigatórios")
        }
        res.send(await AnimalService.createAnimal(animal));
        global.logger.info(`POST /animal - ${JSON.stringify(animal)}`);
    } catch (error) {
        next(error);
    } 
}

async function getAnimals(req, res, next){
    try {
        res.send(await AnimalService.getAnimals(req.query.proprietario_id));
        global.logger.info(`GET /animal`);
    } catch (error) {
        next(error);
    }
}

async function getAnimal(req, res, next){
    try {
        let id = req.params.id;
        if (!id) {
            throw new Error("Id é obrigatório")
        }
        res.send(await AnimalService.getAnimal(id));
        global.logger.info(`GET /animal/:id - ${id}`);
    } catch (error) {
        next(error);
    }
}

async function updateAnimal(req, res, next){
    try {
        let animal = req.body;
        if (!animal.animal_id || !animal.nome || !animal.tipo || !animal.proprietario_id) {
            throw new Error("Id do animal, nome, tipo e id do proprietário são obrigatórios")
        }
        animal = await AnimalService.updateAnimal(animal);
        res.send(animal);
        global.logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
    } catch (error) {
        next(error);
    }
}

async function deleteAnimal(req, res, next){
    try {
        let id = req.params.id;
        if (!id) {
            throw new Error("Id é obrigatório")
        }
        res.send(await AnimalService.deleteAnimal(id));
        global.logger.info(`DELETE /animal - ${id}`);
    } catch (error) {
        next(error);
    }
}

export default{
    createAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
    deleteAnimal
}