const Admin = require("../Model/AdminModel");

// Get all admins
const getAllAdmins = async (req, res, next) => {
  let admins;
  try {
    admins = await Admin.find();
  } catch (err) {
    console.log(err);
  }

  if (!admins) {
    return res.status(404).json({ message: "No admins found" });
  }
  return res.status(200).json({ admins });
};

// Add a new admin
const addAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Check if admin with this email already exists
  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email });
  } catch (err) {
    console.log(err);
  }

  if (existingAdmin) {
    return res.status(400).json({ message: "Admin with this email already exists" });
  }

  let admin;
  try {
    admin = new Admin({ name, email, password });
    await admin.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to add admin", error: err.message });
  }

  if (!admin) {
    return res.status(404).json({ message: "Unable to add admin" });
  }
  return res.status(200).json({ admin, message: "Admin created successfully" });
};

// Admin login
const adminLogin = async (req, res, next) => {
  const { email, password } = req.body;

  let admin;
  try {
    admin = await Admin.findOne({ email, password });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Login failed", error: err.message });
  }

  if (!admin) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  return res.status(200).json({ admin, message: "Login successful" });
};

// Get admin by ID
const getById = async (req, res, next) => {
  const id = req.params.id;
  let admin;
  try {
    admin = await Admin.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!admin) {
    return res.status(404).json({ message: "Admin not found" });
  }
  return res.status(200).json({ admin });
};

// Update admin
const updateAdmin = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  let admin;
  try {
    admin = await Admin.findByIdAndUpdate(id, { name, email, password }, { new: true });
  } catch (err) {
    console.log(err);
  }

  if (!admin) {
    return res.status(404).json({ message: "Unable to update admin" });
  }
  return res.status(200).json({ admin });
};

// Delete admin
const deleteAdmin = async (req, res, next) => {
  const id = req.params.id;
  let admin;
  try {
    admin = await Admin.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }

  if (!admin) {
    return res.status(404).json({ message: "Unable to delete admin" });
  }
  return res.status(200).json({ message: "Admin deleted successfully" });
};

exports.getAllAdmins = getAllAdmins;
exports.addAdmin = addAdmin;
exports.adminLogin = adminLogin;
exports.getById = getById;
exports.updateAdmin = updateAdmin;
exports.deleteAdmin = deleteAdmin;

