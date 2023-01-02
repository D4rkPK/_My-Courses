const express = require("express");
const cors = require("cors");
const routerAPi = require("./routes");

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/errorHandler");

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ["http://localhost:8080", "http://127.0.0.1:5500"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

routerAPi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
