const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
  logging: false,
});

const Chicken = db.define("chicken", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: Sequelize.ENUM("newborn", "chick", "adult", "deceased"),
    defaultValue: "newborn",
  },
  emoji: {
    type: Sequelize.ENUM("🐣", "🐥", "🐓", "🪦"),
    defaultValue: "🐣",
  },
  alive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  lastFed: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = {
  db,
  Chicken,
};
