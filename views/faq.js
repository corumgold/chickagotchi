const html = require("html-template-tag");

module.exports = function faq() {
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
        <title>FAQ</title>
      </head>
      <body>
        <div id="console">
          <h1>Chickagotchi</h1>
          <div id="screen-border">
            <div id="screen">
              <div id="faq-text">
                <p>
                  Welcome to Chickagotchi, farmer! We are so glad you are
                  here!<br /><br />
                  Chickagotchi is a magical place where your chickens don't need
                  anything more than a little bit of your love and attention to
                  thrive.<br /><br />
                  All you need to do to keep your chickens happy and healthy is
                  check on them at least twice per day.<br /><br />
                  If you neglect your chickens they may become sick, and if you
                  neglect them for too long - they will pass on into the great
                  big chicken coop in the sky!
                </p>
              </div>
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
