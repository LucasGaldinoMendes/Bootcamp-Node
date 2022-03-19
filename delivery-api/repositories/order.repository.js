import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function insertOrder(order) {
  const data = JSON.parse(await readFile(global.fileName));
  order = {
    id: data.nextId,
    cliente: order.cliente,
    produto: order.produto,
    valor: order.valor,
    entregue: false,
    timestamp: new Date(),
  };
  let index = data.nextId - 1;
  data.nextId++;
  data.pedidos.push(order);
  await writeFile(global.fileName, JSON.stringify(data, null, 2));
  return order;
}

async function updateOrder(order) {
  const data = JSON.parse(await readFile(global.fileName));
  const index = data.pedidos.findIndex(
    (pedido) => pedido.id === parseInt(order.id)
  );
  if (index === -1) {
    throw new Error("Registro não encontrado");
  }
  data.pedidos[index].cliente = order.cliente;
  data.pedidos[index].produto = order.produto;
  data.pedidos[index].valor = order.valor;
  data.pedidos[index].entregue = order.entregue;
  data.pedidos[index].timestamp = order.timestamp;
  await writeFile(global.fileName, JSON.stringify(data, null, 2));
  return data.pedidos[index];
}

async function updateStatus(order) {
  const data = JSON.parse(await readFile(global.fileName));
  const index = data.pedidos.findIndex(
    (pedido) => pedido.id === parseInt(order.id)
  );
  if (index === -1) {
    throw new Error("Registro não encontrado");
  }
  data.pedidos[index].entregue = order.entregue;
  await writeFile(global.fileName, JSON.stringify(data, null, 2));
  return data.pedidos[index];
}

async function deleteOrder(id) {
  const data = JSON.parse(await readFile(global.fileName));
  data.pedidos = data.pedidos.filter((pedido) => pedido.id !== parseInt(id));
  await writeFile(global.fileName, JSON.stringify(data, null, 2));
}

async function getOrder(id) {
  const data = JSON.parse(await readFile(global.fileName));
  const index = data.pedidos.findIndex((pedido) => pedido.id === parseInt(id));
  if (index === -1) {
    throw new Error("Registro não encontrado");
  }
  return data.pedidos[index];
}

async function getOrderByCustomer(customer) {
  const data = JSON.parse(await readFile(global.fileName));
  let orderCustomer = data.pedidos.filter(
    (pedido) => pedido.cliente === customer
  );
  if (!orderCustomer) {
    throw new Error("Cliente não encontrado");
  }
  let total = 0;
  orderCustomer.forEach((pedido) => {
    if (pedido.entregue === true) {
      total += pedido.valor;
    }
  });
  return [total];
}

async function getOrderByProduct(product) {
  const data = JSON.parse(await readFile(global.fileName));
  let orderProduct = data.pedidos.filter(
    (pedido) => pedido.produto === product
  );
  if (!orderProduct) {
    throw new Error("Produto não encontrado");
  }
  let total = 0;
  orderProduct.forEach((pedido) => {
    if (pedido.entregue === true) {
      total += pedido.valor;
    }
  });
  return [total];
}

async function getOrderByTopProducts() {
  const data = JSON.parse(await readFile(global.fileName));
  let orders =  data.pedidos;
  const lista = [];
  orders
    .filter((order) => order.entregue)
    .forEach((order) => {
      const index = lista.findIndex(
        (item) => order.produto === item.produto
      );
      if (index === -1) {
        lista.push({ produto: order.produto, quantidade: 1 });
      } else {
        lista[index].quantidade++;
      }
    });
    lista.sort((a,b)=> b.quantidade - a.quantidade);
    return lista.map((p)=>p.produto + " - " + p.quantidade);
  }

  
  async function getProducts() {
    const data = JSON.parse(await readFile(global.fileName));
    let products = [];
    products.push(data.pedidos[0].produto);
    data.pedidos.forEach((pedido) => {
      if (products.indexOf(pedido.produto) === -1) {
        products.push(pedido.produto);
      }
    });
  return products;
}

export default {
  insertOrder,
  updateOrder,
  updateStatus,
  deleteOrder,
  getOrder,
  getOrderByCustomer,
  getOrderByProduct,
  getOrderByTopProducts,
  getProducts,
};
