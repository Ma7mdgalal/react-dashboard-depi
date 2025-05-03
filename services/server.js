import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import usersModel from "./models/users.js"; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Registration endpoint (hash the password)
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await usersModel.create({ ...req.body, password: hashedPassword });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to register user" });
  }
});

// Login endpoint (compare hashed password)23
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  usersModel.findOne({ email }).then(user => {
    if (user) {
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (isMatch) {
          res.json({ message: "success" });
        } else {
          res.status(400).json({ message: "Password is incorrect" });
        }
      });
    } else {
      res.status(400).json({ message: "No such record" });
    }
  }).catch(error => {
    res.status(500).json({ message: "Server error" });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
