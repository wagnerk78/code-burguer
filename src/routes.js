import { Router } from "express";

const routes = new Router();

routes.get("/", (request, response) => {
  return response.json({ mensage: "Hello World" });
});

export default routes;