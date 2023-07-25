import express from "express";
const app = express();
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

import cors from "cors";

import errorMiddleware from "./middlewares/error.js";



//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//routes
const Base_Url ="/api/v1"

app.use(`${Base_Url}/auth`, authRoutes);
app.use(`${Base_Url}/category`, categoryRoutes);
app.use(`${Base_Url}/product`, productRoutes);
app.use(`${Base_Url}/order`, orderRoutes);


//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to lubick  ecommerce app</h1>");
});



//middleware for error
app.use(errorMiddleware)


//exporting app
// module.exports = app;
export default app;