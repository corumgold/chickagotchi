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
  console.log(currentAgeInDays);
};

const greetingMessage = function (chicken) {
  //time since page visit in days
  let timeSinceVisit = (Date.now() - chicken.lastFed) / 86400000;
  if (timeSinceVisit <= 0.5) {
    return "Your chicken is happy and healthy! You're doing a great job, farmer!";
  } else if (timeSinceVisit < 1) {
    return "Your chicken has been a bit lonely today... Make sure to give them extra love today!";
  } else if (timeSinceVisit < 2) {
    return "Your chicken is sick with loneliness! Make sure you are giving them enough love, or they might die!";
  }
};

module.exports = {
  adjustAge,
  greetingMessage,
};
