const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(200).json({ err: "Authentication Failed!" });
    const decodedData = jwt.verify(token, "key");
    let user = await User.findOne({
      _id: decodedData?.userId,
    });
    if (!user) return res.status(200).json({ err: "Authentication Failed!" });
    next();
  } catch (error) {
    console.log(error);
    return res.status(200).json({ err: "Authentication Failed!" });
  }
};
