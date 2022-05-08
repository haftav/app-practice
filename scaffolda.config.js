const { collectProps, scaffolda } = require("scaffolda");

const componentFolder = require("./templates/component");

const commands = [{ title: "Component", value: "component" }];

async function handleCommand(command) {
  if (command === "component") {
    const props = await collectProps(() => [
      {
        type: "text",
        name: "name",
        message: "What is the name of your component?",
      },
    ]);

    scaffolda("./src/components", props, componentFolder);
  }
}

module.exports = () => ({
  commands,
  handleCommand,
});
