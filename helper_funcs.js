const { Chicken } = require("./db");

const checkHealth = function (chicken) {
  const timeSinceVisit = (Date.now() - chicken.lastFed) / 86400000;
  const currentAgeInDays = (Date.now() - chicken.createdAt) / 86400000;
  if (timeSinceVisit > 2 || currentAgeInDays > 100) {
    initDeath(chicken);
  }
};

// -----------------------------------------------------------------------------------

const adjustAge = async function (chicken) {
  const currentAgeInDays = (Date.now() - chicken.createdAt) / 86400000;
  //If the chicken is over 3 hours old, it's a chick
  if (currentAgeInDays >= 0.125 && currentAgeInDays < 3) {
    await Chicken.update(
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
  else if (currentAgeInDays >= 3 && currentAgeInDays <= 100) {
    await Chicken.update(
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

// -----------------------------------------------------------------------------------

const initDeath = async function (chicken) {
  await Chicken.update(
    {
      age: "deceased",
      emoji: "🪦",
      alive: false,
    },
    {
      where: {
        id: chicken.id,
      },
    }
  );
};

// -----------------------------------------------------------------------------------

const greetingMessage = function (chicken) {
  const healthyGreetings = [
    `${chicken.name} is happy and healthy! You're doing a great job, farmer!`,
    `Life on the farm is great for ${chicken.name}! Thanks for checking in!`,
    `Howdy! ${chicken.name} is feeling like a million 'clucks' today!`,
    `Yeehaw! ${chicken.name} is feeling great and enjoying the day!`,
    `"Bawk Bawk!" (That's ${chicken.name}'s way of saying "I love you!")`,
  ];

  const unhealthyGreetings = [
    `${chicken.name} has been a bit lonely today... Make sure to give them extra love today!`,
    `${chicken.name} has missed you and is so glad you are back!`,
    `Next time you are gone for so long, make sure to give ${chicken.name} a heads up!`,
    `Where have you been!? ${chicken.name} was starting to get worried!`,
    `You and ${chicken.name} have some catching up to do!`,
  ];

  const sickGreetings = [
    `${chicken.name} is sick with loneliness! Make sure you are giving them enough love, or they might die!`,
    `${chicken.name} has been worried sick that you weren't coming back!`,
    `Be careful next time! Remember, ${chicken.name} can't survive without your attention!`,
    `${chicken.name} looks terrible...`,
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
      return getRandomGreeting(unhealthyGreetings);
    case timeSinceVisit <= 2:
      return getRandomGreeting(sickGreetings);
  }
};

// const emojiGenerator = async function (chicken) {
//   try {
//     let chickenAge = await adjustAge(chicken);
//     let emoji = function () {
//       switch (true) {
//         case chickenAge === "newborn":
//           return "🐣";
//         case chickenAge === "chick":
//           return "🐥";
//         case chickenAge === "adult":
//           return "🐓";
//         case chickenAge === "deceased":
//           return "🪦";
//       }
//     };
//     return emoji;
//   } catch (e) {
//     return "darn!";
//   }
// };

module.exports = {
  adjustAge,
  greetingMessage,
  // emojiGenerator,
  initDeath,
  checkHealth
};
