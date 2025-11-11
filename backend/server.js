const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load .env

const authRoutes = require("./routes/auth");
const enquiryRoutes = require("./routes/enquiry");

const app = express();
app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true,
  }
));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on http://localhost:${process.env.PORT}`);
});
