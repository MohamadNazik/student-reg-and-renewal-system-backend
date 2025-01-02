import express from "express";
import { verifyStudentController } from "../../controllers/User/verifyStudentController.js";
import multer from "multer";
import { fileUploadAndVerifyController } from "../../middlewares/fileUploadAndVerifyController.js";
import { olCertificateVerify } from "../../controllers/User/DocumentsVerify/olCertificateVerify.js";
import { documentUploadMiddleware } from "../../middlewares/fileUploadMiddleware.js";
import { addStudentController } from "../../controllers/User/addStudentController.js";
import { AlCertificateVerify } from "../../controllers/User/DocumentsVerify/AlCertificateVerify.js";
import { BirthcertificateVerify } from "../../controllers/User/DocumentsVerify/BirthcertificateVerify.js";
import { MedicalCertificateVerify } from "../../controllers/User/DocumentsVerify/MedicalCertificateVerify.js";

const router = express.Router();

router.post("/verifyStudent", verifyStudentController);
const upload = multer({ dest: "uploads/" });

router.post(
  "/verify-ol",
  upload.single("pdf"),
  fileUploadAndVerifyController,
  olCertificateVerify
);
router.post(
  "/verify-al",
  upload.single("pdf"),
  fileUploadAndVerifyController,
  AlCertificateVerify
);
router.post(
  "/verify-bc",
  upload.single("pdf"),
  fileUploadAndVerifyController,
  BirthcertificateVerify
);
router.post(
  "/verify-mc",
  upload.single("pdf"),
  fileUploadAndVerifyController,
  MedicalCertificateVerify
);
router.post("/add-student", documentUploadMiddleware, addStudentController);

export default router;
