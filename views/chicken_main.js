const html = require("html-template-tag");
const { Chicken } = require("../db");
const { adjustAge } = require("../helper_funcs");

module.exports = function chickenMain(chicken) {
  //change chicken age (if needed)
  adjustAge(chicken);
  //feed chicken on refresh
  chicken.feed();
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Congratulations!</title>
      </head>
      <body>
        <h1>${chicken.name}</h1>
        <h2>This is your chicken! Take good care of it!</h2>
        <p>
          Your chicken thrives off of your love and attention! The best way to
          take good care of it is to make sure you visit this home page at least
          once per day :-)
        </p>
        <p class="Emoji">🐥</p>
      </body>
    </html> `;
};
