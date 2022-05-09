const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

router.post("/login", authUser);
router.route("/").post(registerUser).get(protect, allUsers);

module.exports = router;
