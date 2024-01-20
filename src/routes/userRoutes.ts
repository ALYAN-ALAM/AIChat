import { Router } from "express";
import { getAllUser } from "../controllers/userController.js";

const userRoutes = Router();
console.log("User Routes");

userRoutes.get("/", getAllUser);

export default userRoutes;
