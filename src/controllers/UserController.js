const UserRepository = require("../repositories/UserRepository");

async function index(req, res) {
  try {
    const result = await UserRepository.all();
    res.write(JSON.stringify(result));
    res.end();
  } catch (error) {
    res.statusCode = 404;
    res.end("Error");
  }
}

async function show(req, res) {
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
}

async function store(req, res) {
  try {
    const result = await UserRepository.create(req.body);
    if (result) {
      res.end();
    }
  } catch (error) {
    res.statusCode = 404;
    res.end("Error");
  }
}

async function update(req, res) {
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
}

async function remove(req, res) {
  const { tckn } = req.params;
  try {
    const result = await UserRepository.delete(tckn);
    res.end();
  } catch (error) {
    res.statusCode = 404;
    res.end("Error");
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  remove,
};
