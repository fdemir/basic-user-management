const Route = require("route-parser");

module.exports = {
  prefix: "/api",
  handlers: [],

  run(req, res) {
    const targetRoute = this.handlers.find((v) => {
      const route = new Route(v.path);
      const isMatched = route.match(req.url);
      if (isMatched && v.method === req.method) {
        req.params = isMatched;
        return true;
      }
    });

    if (!targetRoute) {
      res.statusCode = 404;
      return res.end("Not found.");
    }

    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      if (body) {
        req.body = JSON.parse(body);
      }
      targetRoute.callback(req, res);
    });
  },

  register(method, path, cb) {
    this.handlers.push({
      path: this.prefix + path,
      callback: cb,
      method: method,
    });
  },
};
