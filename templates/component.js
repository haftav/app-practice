const { createFile, createFolder } = require('scaffolda');
const { toUpperCamelCase } = require('./utils');

const component = createFile(
  ({ name }) => `
const ${toUpperCamelCase(name)} = () => {
  return <div></div>;
};

export default ${toUpperCamelCase(name)};

`,
  ({ name }) => `${toUpperCamelCase(name)}.tsx`
);

module.exports = createFolder([component], ({ name }) => toUpperCamelCase(name));
