const html = require("html-template-tag");
const console = require("./console");

module.exports = function faq() {
  return console(html`
    <div id="faq-text">
      <p>
        Welcome to Chickagotchi, farmer! We are so glad you are here!<br /><br />
        Chickagotchi is a magical place where your chickens don't need anything
        more than a little bit of your love and attention to thrive.<br /><br />
        All you need to do to keep your chickens happy and healthy is check on
        them at least twice per day.<br /><br />
        If you neglect your chickens they may become sick, and if you neglect
        them for too long - they will pass on into the great big chicken coop in
        the sky!
      </p>
    </div>
  `);
};
