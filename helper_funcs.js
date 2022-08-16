const { Chicken } = require("./db");

const adjustAge = async function (chicken) {
  let currentAgeInDays = (Date.now() - chicken.createdAt) / 86400000;
  //If the chicken is over 3 hours old, it's a chick
  if (currentAgeInDays >= 0.125 && currentAgeInDays < 3) {
    let result = await Chicken.update(
      {
        age: "chick",
        emoji: "🐥",
      },
      {
        where: {
          id: chicken.id,
        },
      }
    );
  }
  //If the chicken is over 3 days old, it's an adult
  else if (currentAgeInDays >= 3) {
    let result = await Chicken.update(
      {
        age: "adult",
        emoji: "🐓",
      },
      {
        where: {
          id: chicken.id,
        },
      }
    );
  }
  console.log(
    "🔔",
    chicken.name,
    "is a",
    chicken.age,
    "they are",
    currentAgeInDays,
    "days old"
  );
  return chicken.age;
};

const greetingMessage = function (chicken) {
  const healthyGreetings = [
    `${chicken.name} is happy and healthy! You're doing a great job, farmer!`,
    `Life on the farm is great for ${chicken.name}! Thanks for checking in!`,
    `Howdy! ${chicken.name} is feeling like a million 'clucks' today!`,
    `Yeehaw! ${chicken.name} is feeling great and enjoying the day!`,
    `"Bawk Bawk!" (That's ${chicken.name}'s way of saying "I love you!")`,
  ];

  let timeSinceVisit = (Date.now() - chicken.lastFed) / 86400000;

  function getRandomGreeting(greetingArr) {
    const randomIndex = Math.floor(Math.random() * greetingArr.length);
    const greeting = greetingArr[randomIndex];
    return greeting;
  }

  switch (true) {
    case chicken.age === "newborn":
      return `${chicken.name} is still getting used to being out of their shell!`;
    case timeSinceVisit <= 0.5:
      return getRandomGreeting(healthyGreetings);
    case timeSinceVisit < 1:
      return `${chicken.name} has been a bit lonely today... Make sure to give them extra love today!`;
    case timeSinceVisit < 2:
      return `${chicken.name} is sick with loneliness! Make sure you are giving them enough love, or they might die!`;
  }
};

const emojiGenerator = async function (chicken) {
  try {
    let chickenAge = await adjustAge(chicken);
    let emoji = function () {
      switch (true) {
        case chickenAge === "newborn":
          return "🐣";
        case chickenAge === "chick":
          return "🐥";
        case chickenAge === "adult":
          return "🐓";
        case chickenAge === "deceased":
          return "🪦";
      }
    };
    return emoji;
  } catch (e) {
    return "darn!";
  }
};

module.exports = {
  adjustAge,
  greetingMessage,
  emojiGenerator,
};
