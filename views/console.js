const html = require("html-template-tag");
const Chicken = require("../db");

module.exports = function console(content) {
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
        <title>🐥 Chickagotchi!</title>
      </head>
      <body>
        <div id="console">
          <h1>Chickagotchi</h1>
          <div id="screen-border">
            <div id="screen">
                $${content}
            </div>
          </div>
          <div id="buttons">
            <form action="/">
              <button type="submit">New</button>
            </form>
            <form action="/chickens">
              <button type="submit">Coop</button>
            </form>
            <form action="/faq">
              <button type="submit">FAQ</button>
            </form>
          </div>
        </div>
      </body>
    </html> `;
};
