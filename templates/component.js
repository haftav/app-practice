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

const index = createFile(
  ({ name }) => `
export * from './${toUpperCamelCase(name)}';
export { default } from './${toUpperCamelCase(name)}';
`,
  'index.ts'
);

module.exports = createFolder([component, index], ({ name }) => toUpperCamelCase(name));
