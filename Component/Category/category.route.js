import express from "express";
import {
  createNewCategory,
  editCategory,
  fetchAllCat,
} from "./category.controller.js";

const Router = express.Router();

Router.post("/createCategory", createNewCategory);
Router.post("/editCategory", editCategory);
Router.get("/allcategories", fetchAllCat);

export default Router;
