import mongoose, { Schema, Document } from "mongoose";
export interface User extends Document {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  verifyCode: string;
  ExpiryCode: Date;
  isVerfiy: boolean;
}
const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "UserName required"],
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, "Name required"],
  },
  lastName: {
    type: String,
    required: [true, "LastName required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+\@.+\..+/, "Please enter correct Email "],
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Password required"],
  },
  verifyCode: {
    type: String,
    required: [true, "code required"],
  },
  ExpiryCode: {
    type: Date,
    required: [true, "verify code Expiry is  required"],
  },
  isVerfiy: {
    type: Boolean,
    default: false,
  },
});
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);
export default UserModel;
