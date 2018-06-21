const fse = require('fs-extra')
const path = require('path');

const LICENSE = 'LICENSE';
const CONTRIBUTING = 'CONTRIBUTING.md';
const README = 'README.md';

const CE_PATH = './dist/ce';
const PRO_PATH = './dist/pro';

const SRC_CE_PATH = './lib/ce';
const SRC_PRO_PATH = './lib/pro';

fse.copySync(path.resolve(`./${LICENSE}`), path.resolve(`${CE_PATH}/${LICENSE}`), { overwrite: true });
fse.copySync(path.resolve(`./${CONTRIBUTING}`), path.resolve(`${CE_PATH}/${CONTRIBUTING}`), { overwrite: true });
fse.copySync(path.resolve(`${SRC_CE_PATH}/${README}`), path.resolve(`${CE_PATH}/${README}`), { overwrite: true });

fse.copySync(path.resolve(`./${LICENSE}`), path.resolve(`${PRO_PATH}/${LICENSE}`), { overwrite: true });
fse.copySync(path.resolve(`./${CONTRIBUTING}`), path.resolve(`${PRO_PATH}/${CONTRIBUTING}`), { overwrite: true });
fse.copySync(path.resolve(`${SRC_PRO_PATH}/${README}`), path.resolve(`${PRO_PATH}/${README}`), { overwrite: true });
