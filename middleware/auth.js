const jwt = require("jsonwebtoken");

module.exports = {
  auth: async (req, res, next) => {
    try {
      const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);
      if (decoded) {
        req.user = decoded.user;
        next();
      }
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  },
};
