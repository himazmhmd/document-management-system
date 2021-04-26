import express from "express";
/*const {
  userValidator,
  userValidationResult,
} = require("../Validators/userValidator");*/

import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/User.js";

const router = express.Router();

router.post("/sign-up", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
