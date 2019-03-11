const fse = require('fs-extra')
const path = require('path');

const LICENSE = 'LICENSE';
const CONTRIBUTING = 'CONTRIBUTING.md';
const README = 'README.md';
const PACKAGE = 'package.json';

const TARGET_PATH = './dist/hot-table';

fse.copySync(path.resolve(`./${LICENSE}`), path.resolve(`${TARGET_PATH}/${LICENSE}`), { overwrite: true });
fse.copySync(path.resolve(`./${CONTRIBUTING}`), path.resolve(`${TARGET_PATH}/${CONTRIBUTING}`), { overwrite: true });
fse.copySync(path.resolve(`./${README}`), path.resolve(`${TARGET_PATH}/${README}`), { overwrite: true });

const PACKAGE_BODY = fse.readJsonSync(path.resolve(`./${PACKAGE}`), { encoding: 'utf-8' });

delete PACKAGE_BODY.dependencies;
delete PACKAGE_BODY.devDependencies;

fse.writeJsonSync(path.resolve(`./projects/hot-table/${PACKAGE}`), PACKAGE_BODY);

const SRC_MODULE = path.resolve(`./projects/hot-table/src/lib/hot-table.module.ts`);
const MODULE_BODY = fse.readFileSync(SRC_MODULE, { encoding: 'utf-8' });

fse.writeFileSync(SRC_MODULE, `${MODULE_BODY.replace("0.0.0-VERSION';", `${PACKAGE_BODY.version}';`)}`, { encoding: 'utf-8' });
