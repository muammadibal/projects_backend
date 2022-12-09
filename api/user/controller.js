const { User } = require("../../db/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  signIn: async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    const passw = bcrypt.compareSync(JSON.stringify(password), user.password);

    if (user) {
      if (passw) {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          process.env.JWT_SECRET_KEY
        );

        delete user.dataValues.password;

        return res.json({
          message: "user data",
          data: {
            ...user.dataValues,
            token: token,
          },
        });
      } else {
        return res.json({
          message: "wrong password",
          data: null,
        });
      }
    }

    return res.json({
      message: "failed user not found",
      data: null,
    });
  },
  signUp: async (req, res, next) => {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ where: { email: email } });

    if (!checkUser) {
      const passw = bcrypt.hashSync(JSON.stringify(password), 10);

      const user = await User.create({
        email,
        password: passw,
        role: 3,
      });

      delete user.dataValues.password;

      return res.json({
        message: "user create success",
        data: user,
      });
    }

    return res.json({
      message: "user already registered",
      data: null,
    });
  },
  getUsers: async (req, res, next) => {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    if (users.length > 0) {
      return res.json({
        message: "list users",
        data: users,
      });
    }

    return res.json({
      message: "failed user not found",
      data: users,
    });
  },
  getUser: async (req, res, next) => {
    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: ["password"] },
    });

    if (user) {
      return res.json({
        message: "user detail",
        data: user,
      });
    }

    return res.json({
      message: "failed user not found",
      data: null,
    });
  },
  updateUser: async (req, res, next) => {
    const { email, password, newPassword, role } = req.body;

    const user = await User.findOne({ where: { id: req.user.id } });
    if (user) {
      if (password) {
        const checkPassw = bcrypt.compareSync(
          JSON.stringify(password),
          user.password
        );

        if (checkPassw) {
          const passw = bcrypt.hashSync(JSON.stringify(password), 10);

          const newUser = await User.update(
            { password: passw },
            {
              where: {
                id: req.user.id,
              },
            }
          );

          return res.json({
            message: "user update success",
            data: newUser,
          });
        } else {
          return res.json({
            message: "wrong password",
            data: null,
          });
        }
      }
    }

    return res.json({
      message: "failed user not found",
      data: null,
    });
  },
  deleteUser: async (req, res, next) => {
    const { id } = req.body;

    const user = await User.findOne({ where: { id } });

    if (user) {
      await User.update(
        { deletedAt: new Date() },
        {
          where: {
            id,
          },
        }
      );

      return res.json({
        message: "success delete user",
        data: null,
      });
    }

    return res.json({
      message: "failed user not found",
      data: null,
    });
  },
};
