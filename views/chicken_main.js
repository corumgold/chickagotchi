const html = require("html-template-tag");

function chickenMain() {
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Chicken or Egg</title>
      </head>
      <body>
        <h1>This is a test</h1>
      </body>
    </html> `;
}

module.exports = {
  chickenMain,
};
