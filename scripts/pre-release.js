const fse = require('fs-extra')
const path = require('path');

const CE_PACKAGE_PATH = path.resolve('./dist/ce/package.json');
const PRO_PACKAGE_PATH = path.resolve('./dist/pro/package.json');

const SOURCE_PACKAGE = require(path.resolve('./package.json'));
const CE_PACKAGE = fse.readJsonSync(CE_PACKAGE_PATH);
const PRO_PACKAGE = fse.readJsonSync(PRO_PACKAGE_PATH);

CE_PACKAGE.version = SOURCE_PACKAGE.version;
CE_PACKAGE.description = SOURCE_PACKAGE.description;
CE_PACKAGE.repository = SOURCE_PACKAGE.repository;
CE_PACKAGE.author = SOURCE_PACKAGE.author;
CE_PACKAGE.keywords = SOURCE_PACKAGE.keywords.concat(CE_PACKAGE.keywords);
CE_PACKAGE.license = SOURCE_PACKAGE.license;
CE_PACKAGE.bugs = SOURCE_PACKAGE.bugs;
CE_PACKAGE.homepage = SOURCE_PACKAGE.homepage;

PRO_PACKAGE.version = SOURCE_PACKAGE.version;
PRO_PACKAGE.description = SOURCE_PACKAGE.description;
PRO_PACKAGE.repository = SOURCE_PACKAGE.repository;
PRO_PACKAGE.author = SOURCE_PACKAGE.author;
PRO_PACKAGE.keywords = SOURCE_PACKAGE.keywords.concat(PRO_PACKAGE.keywords);
PRO_PACKAGE.license = SOURCE_PACKAGE.license;
PRO_PACKAGE.bugs = SOURCE_PACKAGE.bugs;
PRO_PACKAGE.homepage = SOURCE_PACKAGE.homepage;

fse.writeJsonSync(CE_PACKAGE_PATH, CE_PACKAGE);
fse.writeJsonSync(PRO_PACKAGE_PATH, PRO_PACKAGE);
