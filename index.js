const http = require("http");
const setupRoutes = require("./src/config/routes");
const connectDatabase = require("./src/config/database");

const port = 8080;
const hostname = "api";

// Databse
connectDatabase();

// Routes
const router = setupRoutes();

const server = http.createServer((req, res, params) => {
  res.setHeader("Content-Type", "application/json");
  router.run(req, res, params);
});

server.listen(port, hostname, () => {
  console.log(`Server running on ${hostname}:${port}`);
});
