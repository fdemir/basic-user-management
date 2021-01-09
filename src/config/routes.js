const router = require("../helper/router");

const UserController = require("../controllers/UserController");

module.exports = function () {
  router.register("GET", "/user", UserController.index);
  router.register("GET", "/user/:tckn", UserController.show);
  router.register("POST", "/user", UserController.store);
  router.register("PUT", "/user/:tckn", UserController.update);
  router.register("DELETE", "/user/:tckn", UserController.remove);

  return router;
};
