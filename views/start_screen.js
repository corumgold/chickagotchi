const html = require("html-template-tag");
const Chicken = require("../db");

module.exports = function startScreen() {
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/style.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <title>Congratulations!</title>
      </head>
      <body>
        <div id="console">
          <h1>Chickagotchi</h1>
          <div id="screen-border">
            <div id="screen">
              <p>Please pick a name for your chicken!</p>
              <p class="emoji">🥚</p>
              <form action="/new" method="POST">
                <input name="name" type="text" placeholder="Chicken Name" />
                <button type="submit" class="btn btn-primary">
                  Cluck Cluck!
                </button>
              </form>
            </div>
          </div>
          <div id="buttons">
            <button>New</button>
            <button>Test</button>
            <button>FAQ</button>
          </div>
        </div>
      </body>
    </html> `;
};
