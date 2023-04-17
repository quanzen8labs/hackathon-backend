const express = require("express");
const jwt = require("jsonwebtoken");

const { checkUser } = require("./service");
// eslint-disable-next-line no-unused-vars
const winstonLogger = require("../../core/logger");

const router = express.Router();

const loginHandler = async (req, res) => {
  if (req.body.username && req.body.password) {
    const user = await checkUser(req.body.username, req.body.password);
    if (user) {
      if (!user.isActive) {
        return res.status(400).send({
          message: "User is not active",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          username: req.body.username,
          exp:
            Math.floor(Date.now() / 1000) +
            parseInt(process.env.JWT_EXPIRES_IN, 10),
        },
        process.env.JWT_SECRET
      );

      return res.status(200).send({
        status: true,
        result: {
          username: user.username,
          token: token,
        },
      });
    }
  }

  res.status(400).send({ message: "Invalid username or password" });
};

router.post("/login", loginHandler);

module.exports = router;
