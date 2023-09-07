#!/usr/bin/env node
const { default: axios } = require("axios");
const { program } = require("commander");
const { greetingMessage } = require("./helper_funcs");

const apiUrl = "http://localhost:3000";

program
  .command("faq")
  .description("Display frequently asked questions")
  .action(() => {
    console.log(`Welcome to Chickagotchi, farmer! We are so glad you are here!

Chickagotchi is a magical place where your chickens don't need anything
more than a little bit of your love and attention to thrive.

All you need to do to keep your chickens happy and healthy
is check on them at least twice per day.

If you neglect your chickens they may become sick, and if you neglect them for too long,
they will pass on into the great big chicken coop in the sky!`);
  });

program
  .command("status")
  .description("Display the status of your chickens")
  .action(async () => {
    try {
      const response = await axios.get(apiUrl + "/chickens");

      if (response.status === 200) {
        const chickens = response.data;
        console.log(
          chickens
            .map((chicken) => {
              return greetingMessage(chicken);
            })
            .join("\n")
        );
      } else {
        console.error("Error fetching chickens!");
      }
    } catch (error) {
      console.error("Error fetching chickens!", error);
    }
  });

program
  .command("hatch <name>")
  .description("Create a new chicken with the given name")
  .action(async (name) => {
    try {
      const response = await axios.post(apiUrl + "/new", { name });

      if (response.status === 200) {
        console.log(`A new chicken named ${name} has hatched!`);
      } else {
        console.error(`Failed to hatch a new chicken named ${name}.`);
      }
    } catch (error) {
      console.error("Error creating a new chicken:", error.message);
    }
  });

program
  .command("set-free <name>")
  .description("Set a chicken free")
  .action(async (name) => {
    try {
      const response = await axios.delete(apiUrl + `/chickens/${name}`, {
        name,
      });

      if (response.status === 200) {
        console.log(`${name} has been set free.`);
      } else {
        console.error(`Failed to set ${name} free.`);
      }
    } catch (error) {
      console.error("Error deleting chicken:", error.message);
    }
  });

program.parse(process.argv);
