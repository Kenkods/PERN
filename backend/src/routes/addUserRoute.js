import express from "express";

import { addUser, login } from "../controllers/userController.js";

console.log("✅ Routes loaded");

const router=express.Router();

router.post('/user',addUser);
router.post("/login", login,);
export default router;
