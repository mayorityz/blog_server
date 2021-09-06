import Categories from "./category.model.js";
import ORM from "../../Utilities/ORM.js";

export const createNewCategory = async (req, res) => {
  const { title } = req.body;
  await ORM.Create({ title }, Categories, (cb) => {
    res.status(200).json(cb);
  });
};

export const editCategory = async (req, res) => {};
export const fetchAllCat = async (req, res) => {
  let _ORM = new ORM({}, Categories);
  await _ORM.Read((response) => {
    console.log(response);
    res.send(response);
  });
};
