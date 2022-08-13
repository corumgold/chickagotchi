const html = require("html-template-tag");

module.exports = function chickenMain() {
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Which Came First?</title>
      </head>
      <body>
        <h1>Welcome to Which Came First!</h1>
        <h2>Pick a name for your first chicken!</h2>
        <p class="Emoji">🐔</p>
        <form action="/new/" method="POST">
          <input name="name" type="text" placeholder="Chicken Name" />
          <button type="submit" class="btn btn-primary">Cluck Cluck!</button>
        </form>
      </body>
    </html> `;
};
