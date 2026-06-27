const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Todo API is running...");
});

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

   console.log("Starting Express...");

app.listen(PORT, () => {
    console.log("Express is listening");
    console.log(`http://localhost:${PORT}`);
});

  } catch (error) {
    console.error(error);
  }
};

startServer();