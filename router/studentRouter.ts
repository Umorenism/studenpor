import { Router } from "express";
import { createStudentAccount } from "../controller/studentController";
import { readStudentAccount } from "../controller/studentController"
import { readStudentAccountByID } from "../controller/studentController"
import { readStudentAccountByCategory } from "../controller/studentController"
import { updateStudentAccount } from "../controller/studentController";
import { deleteStudentAccount } from "../controller/studentController";

const router: Router = Router();

router.route("/create-studentPortal").post(createStudentAccount);
router.route("/read-studentPortals").get(readStudentAccount);
router.route("/read-studentPortal-id/:studentPortalID").get(readStudentAccountByID);
router.route("/read-studentPortal-category").get(readStudentAccountByCategory);
router.route("/update-StudentPortal/:StudentPortalID").patch(updateStudentAccount);
router.route("/delete-StudentPortal/:StudentPortalID").delete(deleteStudentAccount);

export default router;
