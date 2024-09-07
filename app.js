const express = require("express");
const app = express();
const tasks = require("./Routes/routes");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for Json req.body
app.use(express.static("./public"));

// //routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manager app");
// });

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
