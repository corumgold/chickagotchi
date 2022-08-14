const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/chickagotchi");

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
