import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import usersModel from "./models/users.js"; // assumes default export

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI  "mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Registration endpoint (prevent duplicate email)
app.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // avoid redandancy of email
    const existingUser = await usersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await usersModel.create({
      email,
      password: hashedPassword,
      name,
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to register user" });
  }
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usersModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "No such record" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    res.json({ message: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start server
const PORT = process.env.PORT  3001;
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
