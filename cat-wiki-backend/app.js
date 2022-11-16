const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const catRoutes = require("./routes");

dotenv.config({ path: "./config.env" });
const app = express();


app.use('/', catRoutes)
app.use(express.json());

// configuring the cors middleware
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
