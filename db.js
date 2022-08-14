const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/chickenegg");

const Chicken = db.define("chicken", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: Sequelize.ENUM("chick", "adult", "deceased"),
    defaultValue: "chick",
  },
  health: {
    type: Sequelize.INTEGER,
    defaultValue: 4,
  },
});

module.exports = {
  db,
  Chicken,
};
