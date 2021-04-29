import mongoose from "mongoose";

const { Schema } = mongoose;
import bcrypt from "bcrypt";

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  fullName: {
    type: String,
  },
  faculty: {
    type: String,
  },
  type: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  phoneNo: {
    type: String,
  },
  empId: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  dutyLeave: [
    {
      to: {
        type: Date,
      },
      from: {
        type: Date,
      },
    },
  ],
});
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
export default mongoose.model("user", userSchema);
