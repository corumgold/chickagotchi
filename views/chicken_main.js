const html = require("html-template-tag");
const { Chicken } = require("../db");
const console = require("./console");
const {
  adjustAge,
  greetingMessage,
  emojiGenerator,
  checkHealth,
} = require("../helper_funcs");

module.exports = function chickenMain(chicken) {
  let message;
  checkHealth(chicken);

  if (chicken.alive) {
    //change chicken age (if needed)
    adjustAge(chicken);
    //feed chicken on refresh
    chicken.feed();
    message = greetingMessage(chicken);
  } else {
    message = `RIP ${chicken.name}`;
  }

  return console(html`
    <p class="emoji">${chicken.emoji}</p>
    <p>${message}</p>
  `);
};
