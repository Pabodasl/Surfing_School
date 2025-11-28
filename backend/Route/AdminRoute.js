const express = require("express");
const router = express.Router();
const {
  getAllAdmins,
  addAdmin,
  adminLogin,
  getById,
  updateAdmin,
  deleteAdmin
} = require("../Conrollers/AdminControl");

router.get("/getAll", getAllAdmins);
router.post("/create", addAdmin);
router.post("/login", adminLogin);
router.get("/:id", getById);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;

