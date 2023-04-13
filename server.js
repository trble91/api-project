import db from "./lib/db/connection.js";
import express from "express";
import routes from "./routes/path.js";

const app = express();
const PORT = process.env.PORT || 3000

app.use("/", routes);

db.connection.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB!");

  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(`Express server running in development on: ${PORT}`);
  });
});