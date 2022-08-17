const html = require("html-template-tag");
const { checkHealth, adjustAge } = require("../helper_funcs");
const console = require("./console");

module.exports = function chickenList(chickens) {
  chickens.forEach((chicken) => {
    checkHealth(chicken);
    adjustAge(chicken);
  });

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
