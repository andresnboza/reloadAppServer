import mongoose from "mongoose";
import colors from "colors";
import "dotenv/config";

const connectDB = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export default connectDB;
