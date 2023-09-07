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
  const currentAgeInDays =
    (Date.now() - new Date(chicken.createdAt)) / 86400000;
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
    `${chicken.name} is doing fantastic today!\nKeep up the good work, farmer!`,
    `The farm life is treating ${chicken.name}\nexceptionally well! Thanks for your care!`,
    `Greetings, dear farmer! ${chicken.name} is\nclucking with joy today!`,
    `${chicken.name} is having an egg-citing day\non the farm!`,
    `"Bawk Bawk!" (That's ${chicken.name}'s way of\nsaying "I'm one happy bird!")`,
    `Cluck cluck! ${chicken.name} couldn't be\nhappier right now!`,
    `${chicken.name} is spreading feathers of\nhappiness all around the coop!`,
    `Hooray for ${chicken.name}! It's a\nsunny-side-up kind of day!`,
    `${chicken.name} is doing absolutely splendidly!\nYour farming skills are top-notch!`,
    `The farm is a paradise for ${chicken.name}!\nThanks for all your dedication!`,
    `Howdy there! ${chicken.name} is feeling like\na million 'clucks' today!`,
    `Yeehaw! ${chicken.name} is having a blast\nand enjoying the day to the fullest!`,
    `Guess what? "${chicken.name}!" That's the sound\nof happiness on the farm!`,
    `${chicken.name} is spreading joy and feathers\neverywhere they go!`,
    `High-five, farmer! ${chicken.name} is living\nthe chicken dream today!`,
    `A round of applause for ${chicken.name}!\nThey're on cloud nine!`,
    `Chick-a-dee-doo! ${chicken.name} is starting\nthe day with a song and a smile!`,
    `Feathers in the air, joy everywhere!\n${chicken.name} is the happiest bird on the farm!`,
    `${chicken.name} is clucking with delight, thanks\nto your care and attention!`,
  ];

  const unhealthyGreetings = [
    `${chicken.name} has been a bit lonely today...\nMake sure to give them extra\nlove today!`,
    `Next time you are gone for so long, make sure to\ngive ${chicken.name} a heads up!`,
    `Where have you been!? ${chicken.name} was starting\nto get worried!`,
    `You and ${chicken.name} have some catching up to\ndo!`,
    `${chicken.name} is feeling a bit under the weather\ntoday, but your presence\nbrightens their day!`,
    `Don't worry, farmer! ${chicken.name} is feeling a\nlittle off, but your care\nalways helps.`,
    `Life on the farm has its ups and downs, and today,\n${chicken.name} is\nexperiencing a bit of a down. Your love makes it\nbetter!`,
    `${chicken.name} is having a clucking day, but your\ncompany makes it all\nbetter!`,
    `${chicken.name} may not be feeling their best, but\nwith your care, they're on\nthe road to recovery!`,
    `A little bird told me that ${chicken.name} isn't\nfeeling 100%, but your love\nwill surely lift their spirits!`,
    `${chicken.name} is taking it easy today, but your\npresence makes all the\ndifference!`,
  ];

  const sickGreetings = [
    `${chicken.name} is sick with loneliness! Make sure you are giving them enough love, or they might die!`,
    `${chicken.name} has been worried sick that you weren't coming back!`,
    `Be careful next time! Remember, ${chicken.name} can't survive without your attention!`,
    `${chicken.name} looks terrible...`,
  ];

  let timeSinceVisit = (Date.now() - new Date(chicken.lastFed)) / 86400000;
  console.log(timeSinceVisit);

  function getRandomGreeting(greetingArr) {
    const randomIndex = Math.floor(Math.random() * greetingArr.length);
    const greeting = greetingArr[randomIndex];
    return greeting;
  }

  switch (true) {
    case chicken.age === "deceased":
      return `${chicken.emoji} ${chicken.name} has passed away. RIP.`;
    case chicken.age === "newborn":
      return `${chicken.emoji} ${chicken.name} is still getting used to being out of their shell!`;
    case timeSinceVisit <= 0.5:
      return chicken.emoji + " " + getRandomGreeting(healthyGreetings);
    case timeSinceVisit < 1:
      return chicken.emoji + " " + getRandomGreeting(unhealthyGreetings);
    case timeSinceVisit <= 2:
      return chicken.emoji + " " + getRandomGreeting(sickGreetings);
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
  initDeath,
  checkHealth,
};
