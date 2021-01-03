const http = require("http");
const router = require("./src/helper/router");
const database = require("./src/config/database");

const port = 8080;
const hostname = "api";

const UserController = require("./src/controllers/UserController");

router.register("GET", "/user", UserController.index);
router.register("GET", "/user/:tckn", UserController.show);
router.register("POST", "/user", UserController.store);
router.register("PUT", "/user/:tckn", UserController.update);
router.register("DELETE", "/user/:tckn", UserController.remove);

const server = http.createServer((req, res, params) => {
  res.setHeader("Content-Type", "application/json");
  router.run(req, res, params);
});

server.listen(port, hostname, () => {
  console.log(`Server running on ${hostname}:${port}`);
});
