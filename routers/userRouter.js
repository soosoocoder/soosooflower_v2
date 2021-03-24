import express from "express";
import { changePassword, editProfile, userProfile, users } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get(routes.userProfile, userProfile);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;