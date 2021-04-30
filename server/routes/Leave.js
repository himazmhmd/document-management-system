import express from "express";
import * as controller from "../controller/Leave.js";

const router = express.Router();

router.post("/:id", controller.addLeave);

export default router;
