import express from "express";
import { newPost, post, getAll } from "./Blog.controller.js";

const Router = express.Router();

Router.post("/createpost", newPost);
Router.post("/readpost", post);
Router.get("/allposts", getAll);

export default Router;
