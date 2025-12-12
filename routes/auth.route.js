import express from "express";
import { LoginUser, RegisrerUser } from "./controllers/auth.controller.js";
const AuthRouter = express.Router();

AuthRouter.post("/login", LoginUser);
AuthRouter.post("/register", RegisrerUser);

export default AuthRouter;
