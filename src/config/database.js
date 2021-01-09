const mongoose = require("mongoose");

module.exports = function () {
  mongoose.set("useFindAndModify", false);

  mongoose.connect(
    "mongodb://root:secret@database:27017/db?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
