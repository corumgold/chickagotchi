const html = require("html-template-tag");
const { Chicken } = require("../db");
const { adjustAge, greetingMessage } = require("../helper_funcs");

module.exports = function chickenMain(chicken) {
  //change chicken age (if needed)
  adjustAge(chicken);
  //feed chicken on refresh
  chicken.feed();

  let message = greetingMessage(chicken);

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/style.css" rel="stylesheet" />
        <title>Congratulations!</title>
      </head>
      <body>
        <h1>${chicken.name}</h1>
        <h2>This is your chicken! Take good care of it!</h2>
        <p class="emoji">🐥</p>
        <p>${message}</p>
        <p>
          (Your chicken thrives off of your love and attention! The best way to
          take good care of it is to make sure you visit your chicken at least
          twice per day)
        </p>
      </body>
    </html> `;
};
