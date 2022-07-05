import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import readmeRoutes from "./modules/readme/readme.routes.js";

import "dotenv/config";

connectDB()
  .then(() => {
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(bodyParser.json());

    app.use("/server/api/readme", readmeRoutes);

    app.get("/server", (req, res) => {
      res.send("Hello World");
    });

    app.use(notFound);
    app.use(errorHandler);

    app.listen(port, () => {
      console.log(`Server listening on the port  ${port}`);
    });
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`.red.underline.bold);
  });
