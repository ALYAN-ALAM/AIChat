import { Router } from "express";
import { getAllUser } from "../controllers/userController.js";
const userRoutes = Router();
userRoutes.get("/", getAllUser);
export default userRoutes;
//# sourceMappingURL=user.js.map