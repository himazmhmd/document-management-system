import mongoose from "mongoose";

const { Schema } = mongoose;
import bcrypt from "bcrypt";

const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  faculty: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  empId: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  dutyLeave: [
    {
      to: {
        type: Date,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
    },
  ],
});
userSchema.methods.generateHash = function (password) {
  return becrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
export default mongoose.model("user", userSchema);
