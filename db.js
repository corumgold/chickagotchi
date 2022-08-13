const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://localhost:5432/chickenoregg");

const Chicken = sequelize.define("chicken", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = {
  sequelize,
  Chicken,
};
