import express from "express";

const router = express.Router();

import { getAllUploads, saveUpload } from "./readme.controller.js";

router.route("/").get(getAllUploads).post(saveUpload);

export default router;
