const timeAgo = require("node-time-ago");
const { Chicken } = require("./db");

const adjustAge = async function (chicken) {
  let currentAgeInDays = (Date.now() - chicken.createdAt) / 86400000;
  //If the chicken is over 3 days old, it's an adult
  if (currentAgeInDays >= 3) {
    let result = await Chicken.update(
      { age: "adult" },
      {
        where: {
          id: chicken.id,
        },
      }
    );
  }
};

module.exports = {
  adjustAge,
};
