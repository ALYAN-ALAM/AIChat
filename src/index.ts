import app from "./app.js";
import { connectDB } from "./db/connection.js";

const PORT = process.env.PORT || 5000;
console.log("Index.ts");

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log("server open and connected to Mongo Database.")
    );
  })
  .catch((err) => console.log(err));
