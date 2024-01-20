import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/indexRoutes.js";
config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
console.log("App.ts");
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map