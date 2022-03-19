import express from "express";
import ordersRouter from "./routes/order.routes.js";

global.fileName = "pedidos.json";

const app = express();
app.use(express.json());
app.use("/orders", ordersRouter);

app.listen(3000, async () => {
  try {
    console.log("API Started");
  } catch (error) {
    console.log("Servidor não iniciador", error);
  }
});
