const { createFile } = require('scaffolda');

const queryTemplate = ({ name }) => `
import {useQuery} from 'react-query';
import axios from 'axios';

import { ApiResponse } from '../models';

export default function ${name}(options = {}) {
  return useQuery<any, Error>([${name}], () => {
    // TODO: add request
  });
}
`;

const query = createFile(queryTemplate, ({ name }) => `${name}.ts`);

module.exports = query;
