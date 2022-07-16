import mongoose from "mongoose";
const itemSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    subtitle: { type: String },
    image: { type: String },
    category: { type: String },
    type: { type: String },
  },
  { timestamps: true }
);
const Item = mongoose.model("Item", itemSchema);
export default Item;
