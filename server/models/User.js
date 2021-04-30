import mongoose from "mongoose";

const { Schema } = mongoose;
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
  
});
userSchema.methods.generateHash = function (password) {
  return becrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
export default mongoose.model("user", userSchema);
