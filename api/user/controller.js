const userDao = require("./dao");
const bcrypt = require("bcryptjs");

module.exports = {
  signIn: async (req, res, next) => {
    const { email, password } = req.body;
    const user = userDao.findBy("email", email);
    console.log("user", user);

    if (user) {
    }

    return res.json({
      message: "user not found",
      data: null,
    });
  },
  signUp: async (req, res, next) => {
    const { email, password } = req.body;
    const user = await userDao.findBy("email", email);
    console.log("user", user);

    // if (!user) {
    //   const userCreate = userDao.create({
    //     email,
    //     password: bcrypt.hashSync(password, 10),
    //     role: 3,
    //   });

    //   return res.json({
    //     message: "user create success",
    //     data: userCreate,
    //   });
    // }

    return res.json({
      message: "user already registered",
      data: null,
    });
  },
  getUsers: async (req, res, next) => {
    const users = userDao.findAll();

    if (users.length > 0) {
      return res.json({
        message: "list users",
        data: users,
      });
    }

    return res.json({
      message: "user not found",
      data: users,
    });
  },
  getUser: async (req, res, next) => {
    const user = ""; //userDao.findBy("id", req.user.id);

    if (user) {
      return res.json({
        message: "user detail",
        data: user,
      });
    }

    return res.json({
      message: "user not found",
      data: null,
    });
  },
  updateUser: async (req, res, next) => {
    const user = ""; //userDao.findBy("id", req.user.id);
    if (user) {
    }

    return res.json({
      message: "user not found",
      data: null,
    });
  },
  deleteUser: async (req, res, next) => {
    const user = ""; //userDao.findBy("id", req.user.id);

    if (user) {
      userDao.deleteById(user.id).then;

      return res.json({
        message: "success delete user",
        data: null,
      });
    }

    return res.json({
      message: "user not found",
      data: null,
    });
  },
};
