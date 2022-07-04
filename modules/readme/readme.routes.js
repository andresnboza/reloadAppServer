import express from "express";

const router = express.Router();

import { getAllUploads } from "./readme.controller.js";

router.route("/").get(getAllUploads);

export default router;
