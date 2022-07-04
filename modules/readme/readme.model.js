import mongoose from "mongoose";

const readmeSchema = mongoose.Schema(
  {
    createdAt: {
      type: Date,
      required: true,
    },
  },
  {
    file_name: {
      type: String,
      required: true,
    },
  },
  {
    encoded: {
      type: Buffer,
      required: true,
    },
  },
  { collection: "readme" }
);

const Readme = mongoose.model("readme", readmeSchema);

export default Readme;
