import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import DB_CONNECTION from "./Utilities/DB.js";
import users from "./Component/Users/user.route.js";
import cases from "./Component/Cases/case.route.js";
import post from "./Component/Blog/Blog.route.js";
import category from "./Component/Category/category.route.js";

const app = express();
const PORT = process.env.PORT || 8084;

let ORIGIN = process.env.NODE_ENV
  ? "https://insidesparkles.surge.sh"
  : "http://localhost:3000";

app.use(cookieParser());

app.use(cors({ origin: ORIGIN, credentials: true }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/v1/users", users);
app.use("/api/v1/cases", cases);
app.use("/api/v1/post", post);
app.use("/api/v1/categories", category);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// catch server errors and respond with 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

try {
  DB_CONNECTION.then(() => {
    console.log("listening");
    app.listen(PORT, () => {
      console.log("connecting DB ...");
      console.log(`running on port ${PORT}`);
    });
  });
} catch (error) {
  console.log(error.message);
  res.status(500).send(error.message);
}
