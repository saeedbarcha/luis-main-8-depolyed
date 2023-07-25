import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cluster from "cluster";
import os from 'os';
const totalCPUs = os.cpus().length;

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to uncought exception`);
  process.exit(1);
});

//config
dotenv.config();


//connected to database
connectDB();


if (cluster.isPrimary) {
  console.log(`Number of CPUs: ${totalCPUs} Master Cluster having ProcessId ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) cluster.fork();

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log("Fork new child worker!");
    cluster.fork();
  });
} else {
  connectDB();  // Database connection
  app.listen(process.env.PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on http://localhost:${process.env.PORT}`);
  });
}


// Unhandled promise Regection
// to handel the the error related to database connectivity
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message} `);
  console.log(`shutting down the server due to unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});