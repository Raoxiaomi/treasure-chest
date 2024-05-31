import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import { merge } from 'lodash';

const YAML_CONFIG_FILENAME = 'config/config.yml';
const filePath = join(__dirname, '../../', YAML_CONFIG_FILENAME);
const envfilePath = join(
  __dirname,
  '../../',
  `config/config.${process.env.NODE_ENV || 'development'}.yml`,
);

const commonConfig = yaml.load(readFileSync(filePath, 'utf-8'));
const envConfig = yaml.load(readFileSync(envfilePath, 'utf-8'));

console.info(merge(commonConfig, envConfig));

export default () => {
  return merge(commonConfig, envConfig);
};
