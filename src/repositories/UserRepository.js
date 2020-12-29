const UserModel = require("../models/UserModel");

module.exports = {
  all() {
    return UserModel.find({});
  },

  create(user) {
    return UserModel.create(user);
  },

  update(id, data) {
    return UserModel.findOneAndUpdate({ tckn: id }, data);
  },

  delete(id) {
    return UserModel.deleteOne({ tckn: id });
  },

  get(id) {
    return UserModel.findOne({ tckn: id });
  },
};
