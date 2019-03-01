const fse = require('fs-extra')
const path = require('path');

const LICENSE = 'LICENSE';
const CONTRIBUTING = 'CONTRIBUTING.md';
const README = 'README.md';
const TARGET_PATH = './dist/hot-table';

fse.copySync(path.resolve(`./${LICENSE}`), path.resolve(`${TARGET_PATH}/${LICENSE}`), { overwrite: true });
fse.copySync(path.resolve(`./${CONTRIBUTING}`), path.resolve(`${TARGET_PATH}/${CONTRIBUTING}`), { overwrite: true });
fse.copySync(path.resolve(`./${README}`), path.resolve(`${TARGET_PATH}/${README}`), { overwrite: true });
