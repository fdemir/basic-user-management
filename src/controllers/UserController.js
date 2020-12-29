const UserRepository = require("../repositories/UserRepository");

module.exports = {
  async index(req, res) {
    try {
      const result = await UserRepository.all();
      res.write(JSON.stringify(result));
      res.end();
    } catch (error) {
      res.statusCode = 404;
      res.end("Error");
    }
  },
  async show(req, res) {
    const { tckn } = req.params;
    try {
      const result = await UserRepository.get(tckn);
      if (result) {
        res.write(JSON.stringify(result));
        res.end();
      }
    } catch (error) {
      res.statusCode = 404;
      res.end("Error");
    }
  },
  async store(req, res) {
    try {
      const result = await UserRepository.create(req.body);
      if (result) {
        res.end();
      }
    } catch (error) {
      res.statusCode = 404;
      res.end("Error");
    }
  },
  async update(req, res) {
    const { tckn } = req.params;
    try {
      const result = await UserRepository.update(tckn, req.body);
      if (result) {
        res.end();
      }
    } catch (error) {
      res.statusCode = 404;
      res.end("Error");
    }
  },
  async delete(req, res) {
    const { tckn } = req.params;
    try {
      const result = await UserRepository.delete(tckn);
      res.end();
    } catch (error) {
      res.statusCode = 404;
      res.end("Error");
    }
  },
};
