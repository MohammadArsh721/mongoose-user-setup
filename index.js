const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");

  const sampleUser = new User({
    name: "John Doe",
    email: "john@example.com",
    password: "securepassword"
  });

  return sampleUser.save();
})
.then(user => {
  console.log("✅ User added:", user);
  mongoose.connection.close();
})
.catch(err => {
  console.error("❌ Error:", err.message);
});
