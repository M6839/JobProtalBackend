import express from "express";
import { login, logout, register, updateProfile,getMe} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { uploadResume,uploadProfilePhoto } from "../middlewares/mutler.js";
 
const router = express.Router();

router.route("/register").post(uploadProfilePhoto,register);
router.route("/login").post(login);
router.get("/me", isAuthenticated, getMe);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,uploadResume,updateProfile);

export default router;

