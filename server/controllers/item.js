import Item from "../models/Item.js";
export const getItems = async (req, res) => {
  try {
    const item = await Item.find();
    return res.json(item);
  } catch (error) {
    console.log(error);
    res.send({ message: error.message });
  }
};
