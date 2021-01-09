const http = require("http");
require("dotenv").config();
const connectDatabase = require("./src/config/database");
const setupRoutes = require("./src/config/routes");

// Databse
connectDatabase();

// Routes
const router = setupRoutes();

const server = http.createServer((req, res, params) => {
  res.setHeader("Content-Type", "application/json");
  router.run(req, res, params);
});

server.listen(process.env.API_PORT, process.env.API_HOSTNAME, () => {
  console.log(
    `Server running on ${process.env.API_HOSTNAME}:${process.env.API_PORT}`
  );
});
