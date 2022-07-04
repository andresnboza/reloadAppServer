import express from "express";

const router = express.Router();

import { getAllUploads, createUpload } from "./readme.controller.js";

router.route("/").get(getAllUploads).post(createUpload);

export default router;
