const { createFile, createFolder } = require('scaffolda');
const { toUpperCamelCase } = require('./utils');

function getImports(isProtected) {
  if (isProtected) {
    return `
import type { NextPage } from 'next'; 
import withAuth from '../components/withAuth'`;
  }

  return "import type { NextPage } from 'next';";
}

function getExports({ name, isProtected }) {
  if (isProtected) {
    return `export default withAuth(${toUpperCamelCase(name)});`;
  }

  return `export default ${toUpperCamelCase(name)};\n`;
}

const page = createFile(
  ({ name, isProtected }) => `
${getImports(isProtected)}

const ${toUpperCamelCase(name)}: NextPage = () => {
  return <div></div>;
};

${getExports({ name, isProtected })}

`,
  ({ name }) => `${name}.tsx`
);

module.exports = page;
