import postModel from "./Blog.model.js";
import ORM from "./../../Utilities/ORM.js";

export const newPost = async (req, res) => {
  const { title, content, category } = req.body;

  await ORM.Create({ title, content, category }, postModel, (CB) => {
    res.send(CB);
  });
};

// read a post ...
export const post = async (req, res) => {
  const { slug } = req.body;
  console.log(" slug : ", slug);
  let _ORM = new ORM({ slug }, postModel);
  await _ORM.Read((response) => {
    res.send(response);
  });
};

export const replyPost = async (req, res) => {
  let { email, comment, slug } = req.body;
  let _ORM = new ORM({}, postModel);
  await _ORM.Update({});
};

export const editPost = async (req, res) => {
  let { title, content, category, slug } = req.body;
  let _ORM = new ORM({}, postModel);
  await _ORM.Update({ slug: slug }, { title, content, category }, (res_) => {
    console.log(res_);
    res.status(200).json(res_);
  });
};

export const getAll = async (req, res) => {
  let _ORM = new ORM({}, postModel);
  await _ORM.Read((response) => {
    res.send(response);
  });
};
