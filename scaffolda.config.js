const { collectProps, scaffolda } = require('scaffolda');

const component = require('./templates/component');
const page = require('./templates/page');
const query = require('./templates/query');

const commands = [
  { title: 'Component', value: 'component' },
  { title: 'Page', value: 'page' },
  { title: 'Query', value: 'query' },
];

async function handleCommand(command) {
  if (command === 'component') {
    const props = await collectProps(() => [
      {
        type: 'text',
        name: 'name',
        message: 'What is the name of your component?',
      },
    ]);

    scaffolda('./src/components', props, component);
  }

  if (command === 'page') {
    const props = await collectProps(() => [
      {
        type: 'text',
        name: 'name',
        message: 'What is the name of your page?',
      },
      {
        type: 'confirm',
        name: 'isProtected',
        message: 'Is this a protected route?',
      },
    ]);

    scaffolda('./src/pages', props, page);
  }

  if (command === 'query') {
    const props = await collectProps(() => [
      {
        type: 'text',
        name: 'name',
        message: 'What is the name of your query?',
      },
    ]);

    scaffolda('./src/query', props, query);
  }
}

module.exports = () => ({
  commands,
  handleCommand,
});
