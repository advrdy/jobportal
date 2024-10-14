import express from "express";
import {
  applyjob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";

import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/apply/:id", isAuthenticated, applyjob);
router.get("/getapplied", isAuthenticated, getAppliedJobs);
router.get("/getapplicants/:id", isAuthenticated, getApplicants);
router.put("/updatestatus/:id", isAuthenticated, updateStatus);

export default router;
