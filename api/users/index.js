const express = require("express");
const router = express.Router();
const User = require("../../schemas/user");

router.get("/getUserByUid", async (req, res) => {
  const { uid } = req.body;
  try {
    const user = await User.getUserByUid(uid);
    res.json({ success: user });
  } catch (e) {
    res.status(400).json({ msg: e.toString() });
  }
});

module.exports = router;
