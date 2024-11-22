import express from "express";
import { uploadStudentDetails } from "./../../controllers/getStudentList.js";
import { fileUploadMiddleware } from "../../middlewares/fileUploadMiddleware.js";

const router = express.Router();

router.post(
  "/upload-student-details",
  fileUploadMiddleware,
  uploadStudentDetails
);

export default router;
