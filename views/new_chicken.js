const html = require("html-template-tag");

module.exports = function newChicken(chickenName) {
  let newChickenLink = `http://localhost:3000/${chickenName}`;

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Congratulations!</title>
      </head>
      <body>
        <h1>Congratulations!</h1>
        <h2>A new chicken has been born!</h2>
        <p class="Emoji">🐣</p>
        <p>It's name is ${chickenName}</p>
        <button id="go-to-chicken">Bawk Bawk!</button>
        <script type="text/javascript">
          document.getElementById("go-to-chicken").onclick = function () {
            location.href = "${newChickenLink}";
          };
        </script>
      </body>
    </html> `;
};
