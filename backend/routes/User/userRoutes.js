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
import { Nicverify } from "../../controllers/User/DocumentsVerify/Nicverify.js";
import { SchoolLeavingCertificateVerify } from "../../controllers/User/DocumentsVerify/SchoolLeavingCertificateVerify.js";
import { A3FormVerify } from "../../controllers/User/DocumentsVerify/A3FormVerify.js";

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
router.post(
  "/verify-nic",
  upload.single("pdf"),
  fileUploadAndVerifyController,
  Nicverify
);
router.post(
  "/verify-slc",
  upload.single("pdf"),
  fileUploadAndVerifyController,
  SchoolLeavingCertificateVerify
);
router.post(
  "/verify-a3form",
  upload.single("pdf"),
  fileUploadAndVerifyController,
  A3FormVerify
);
router.post("/add-student", documentUploadMiddleware, addStudentController);

export default router;
