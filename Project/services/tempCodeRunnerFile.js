// require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());



mongoose.connect("mongodb://127.0.0.1:27017/users")

app.listen(3001 , () => {
  console.log("server is running")
})


// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Social Media Schema
// const SocialMediaSchema = new mongoose.Schema({
//   platform: String,
//   followers: Number,
//   likes: Number,
//   comments: Number,
//   shares: Number,
//   growth: String,
//   barData: Object,
// });

// const SocialMedia = mongoose.model("SocialMedia", SocialMediaSchema);

// // Fetch Social Media Data (Mock API - Replace with actual API calls)
// app.get("/api/social-data", async (req, res) => {
//   try {
//     const socialData = await SocialMedia.find();
//     res.json(socialData);
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // Update Social Media Data (For Testing)
// app.post("/api/social-data", async (req, res) => {
//   try {
//     await SocialMedia.create(req.body);
//     res.json({ message: "Data saved successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to save data" });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





