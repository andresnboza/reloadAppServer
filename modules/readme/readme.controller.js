import asyncHandler from "express-async-handler";
import Readme from "./readme.model.js";

const getAllUploads = asyncHandler(async (req, res) => {
  const items = await Readme.find({});
  console.log("items", items);
  res.json({ data: items });
});

const createUpload = asyncHandler(async (req, res) => {
  const item = new Readme({
    createdAt: new Date(),
    file_name: "Hello.md",
    encoded: 0b1111,
  });

  const createdItem = await item.save();
  res.status(200).json({
    data: createdItem,
  });
});

export { getAllUploads, createUpload };
