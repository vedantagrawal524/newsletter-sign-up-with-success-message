const User = require("../model/User");

const createNewUser = async (req, res) => {
  if (!req?.body?.email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const result = await User.create({
      email: req.body.email,
    });
    res.status(201).json("User Email Saved");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createNewUser,
};
