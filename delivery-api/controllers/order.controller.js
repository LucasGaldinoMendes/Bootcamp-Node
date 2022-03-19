import OrderService from "../services/order.service.js";

async function createOrder(req, res, next) {
  try {
    let order = req.body;
    if (!order.cliente || !order.produto || !order.valor) {
      throw new Error("Os campos cleinte, produto e valor são obrigatórios");
    }
    res.send(await OrderService.createOrder(order));
  } catch (error) {
    next(error);
  }
}

async function updateOrder(req, res, next) {
  try {
    let order = req.body;
    order.id = req.params.id;
    if (!order.id || !order.cliente || !order.produto || !order.valor) {
      throw new Error("Os campos cleinte, produto e valor são obrigatórios");
    }
    if (!OrderService.isProduct(order.produto)) {
      throw new Error("Produto informado não existe");
    }
    res.send(await OrderService.updateOrder(order));
  } catch (error) {
    next(error);
  }
}

async function updateStatus(req, res, next) {
  try {
    let order = req.body;
    order.id = req.params.id;
    if (!order.id || order.status) {
      throw new Error("Os campos Id e status são obrigatórios");
    }
    res.send(await OrderService.updateStatus(order));
  } catch (error) {
    next(error);
  }
}

async function deleteOrder(req, res, next) {
  try {
    if (!req.params.id) {
      throw new Error("O campo id é obrigatório");
    }
    res.send(await OrderService.deleteOrder(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function getOrder(req, res, next) {
  try {
    if (!req.params.id) {
      throw new Error("O campo id é obrigatório");
    }
    res.send(await OrderService.getOrder(req.params.id));
  } catch (error) {
    next(error);
  }
}

async function getOrderByCustomer(req, res, next) {
  try {
    let customer = req.body.cliente;
    if (!customer) {
      throw new Error("Os campos id e cliente são obrigatórios");
    }
    res.status(200).send(await OrderService.getOrderByCustomer(customer));
  } catch (error) {
    next(error);
  }
}

async function getOrderByProduct(req, res, next) {
  try {
    let product = req.body.produto;
    if (!product) {
      throw new Error("O campo produto é obrigatório");
    }
    res.send(await OrderService.getOrderByProduct(product));
  } catch (error) {
    next(error);
  }
}

async function getOrderByTopProducts(req, res, next){
    try {
        res.send(await OrderService.getOrderByTopProducts());
    } catch (error) {
        next(error);
    }
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
};
