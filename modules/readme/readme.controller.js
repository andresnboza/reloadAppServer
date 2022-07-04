import asyncHandler from "express-async-handler";
import Readme from "./readme.model.js";

const getAllUploads = asyncHandler(async (req, res) => {
  const items = await Readme.find({});
  res.json({ data: items });
});

export { getAllUploads };
