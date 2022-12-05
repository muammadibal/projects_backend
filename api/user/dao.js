const User = require("../../db/models/user");

var userDao = {
  findAll: () => User().findAll(),
  create: (user) => {
    var user = new User();
    return user.save();
  },
  findBy: async (type, value) => {
    if (type === "id") {
      return User().findByPk({ where: { id: value } });
    }
    return User().findOne({ where: { type: value } });
  },
  deleteById: (id) => User.destroy({ where: { id: id } }),
  updateUser: (user, id) => {
    var updateUser = {
      email: user.email,
      password: bcrypt.hashSync(user.password, 10),
      updatedAt: new Date(),
    };
    return User().update(updateUser, { where: { id: id } });
  },
};

module.exports = userDao;
