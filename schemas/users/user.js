const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: String,
  },
  dateCreated: {
    type: String,
    required: true,
  },
  dateUpdated: {
    type: String,
    required: true,
  },
});

userSchema.methods.getUserByUid = async (uid) => {
  try {
    const user = await this.findOne({ _id: uid });
    return user;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const User = mongoose.model("users", userSchema);
module.exports = User;
