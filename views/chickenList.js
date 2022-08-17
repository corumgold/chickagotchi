const html = require("html-template-tag");
const console = require("./console");

module.exports = function chickenList(chickens) {
  return console(html`
    <div id="faq-text">
      <ul id="chicken-list">
        ${chickens.map((chicken) => {
          return html`<li>
            <form action="/chickens/${chicken.name}/">
              <button type="submit">${chicken.name} ${chicken.emoji}</button>
            </form>
          </li>`;
        })}
      </ul>
    </div>
  `);
};
