import express from "express";
import { verifyStudentController } from "../../controllers/User/verifyStudentController.js";

const router = express.Router();

router.post("/verifyStudent", verifyStudentController);

export default router;
