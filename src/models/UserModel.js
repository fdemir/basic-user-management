const mongoose = require("mongoose");

function getRandomDigits(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const userSceheme = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
  },
  address: {
    type: String,
  },
  tckn: {
    type: String,
    default: () => {
      let no = [];
      let result = "";
      no[0] = getRandomDigits(1, 9);
      for (i = 1; i < 9; i++) {
        no[i] = getRandomDigits(0, 9);
      }
      no[9] =
        ((no[0] + no[2] + no[4] + no[6] + no[8]) * 7 -
          (no[1] + no[3] + no[5] + no[7])) %
        10;
      no[10] =
        (no[0] +
          no[1] +
          no[2] +
          no[3] +
          no[4] +
          no[5] +
          no[6] +
          no[7] +
          no[8] +
          no[9]) %
        10;
      for (i = 0; i < 11; i++) {
        result += no[i].toString();
      }
      return result;
    },
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: Date,
});

module.exports = mongoose.model("users", userSceheme);
