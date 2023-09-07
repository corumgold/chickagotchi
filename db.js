const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
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

Chicken.prototype.feed = async function () {
  const result = await Chicken.update(
    { lastFed: new Date() },
    {
      where: {
        id: this.id,
      },
    }
  );
  console.log("FED!");
};

module.exports = {
  db,
  Chicken,
};
