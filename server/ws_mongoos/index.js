
const express = require("express");
const connectDB = require("./Config/connectDB");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json())

const contactRouter = require("./Routes/contact")
app.use("/contacts", contactRouter)

app.get("/", (req, res) => {
  res.send("Hello, MongoDB is connected!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});