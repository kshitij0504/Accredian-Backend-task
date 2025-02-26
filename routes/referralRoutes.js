import express from "express";
import { submitReferral } from "../Controller/referral.controller.js";
const router = express.Router();
router.post("/submit", submitReferral);
export default router;
