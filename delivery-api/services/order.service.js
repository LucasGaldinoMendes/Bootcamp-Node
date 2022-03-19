import OrderRepository from "../repositories/order.repository.js";

async function createOrder(order){
    return await OrderRepository.insertOrder(order);
}

async function updateOrder (order){
    return await OrderRepository.updateOrder(order);
}

async function updateStatus (order){
    return await OrderRepository.updateStatus(order);
}

async function deleteOrder(id){
    return await OrderRepository.deleteOrder(id);
}

async function getOrder(id){
    return await OrderRepository.getOrder(id);
}

async function getOrderByCustomer(customer){
    return await OrderRepository.getOrderByCustomer(customer);
}

async function getOrderByProduct(product){
    return await OrderRepository.getOrderByProduct(product);
}

async function getOrderByTopProducts(){
    return await OrderRepository.getOrderByTopProducts();
}

async function isProduct(product){
    let products = await OrderRepository.getProducts(product);
    products.forEach(item => {
        if (product === item) {
            return true;
        }
    });
    return false;
}

export default {
    createOrder,
    updateOrder,
    updateStatus,
    deleteOrder,
    getOrder,
    getOrderByCustomer,
    getOrderByProduct,
    getOrderByTopProducts,
    isProduct
};