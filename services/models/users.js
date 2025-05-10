import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const usersModel = mongoose.model("users", usersSchema);

export default usersModel; // ✅ Use export default for ES modules
