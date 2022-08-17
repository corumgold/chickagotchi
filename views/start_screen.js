const html = require("html-template-tag");
const console = require("./console");
const Chicken = require("../db");

module.exports = function startScreen() {
  return console(html`
    <p>Please pick a name for your chicken!</p>
    <p class="emoji">🥚</p>
    <form action="/new" method="POST">
      <input id="name-input" name="name" type="text" placeholder="Name" />
      <button type="submit">Cluck!</button>
    </form>
  `);
};
