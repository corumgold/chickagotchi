const html = require("html-template-tag");
const { Chicken } = require("../db");
const console = require("./console");
const {
  adjustAge,
  greetingMessage,
  emojiGenerator,
} = require("../helper_funcs");

module.exports = function chickenMain(chicken) {
  //change chicken age (if needed)
  adjustAge(chicken);
  //feed chicken on refresh
  chicken.feed();

  let message = greetingMessage(chicken);

  return console(html`
    <p class="emoji">${chicken.emoji}</p>
    <p>${message}</p>
  `);
};
