const { createFile, createFolder } = require('scaffolda');

function toUpperCamelCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}

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
