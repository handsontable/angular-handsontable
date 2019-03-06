const fse = require('fs-extra')
const path = require('path');

const TARGET_PACKAGE_PATH = path.resolve('./dist/hot-table/package.json');
const TARGET_UMD_MIN_JS_PATH = path.resolve('./dist/hot-table/bundles/handsontable-angular.umd.min.js');
const TARGET_UMD_JS_PATH = path.resolve('./dist/hot-table/bundles/handsontable-angular.umd.js');

const SOURCE_PACKAGE = require(path.resolve('./package.json'));
const TARGET_PACKAGE = fse.readJsonSync(TARGET_PACKAGE_PATH, { encoding: 'utf-8' });

TARGET_PACKAGE.version = SOURCE_PACKAGE.version;
TARGET_PACKAGE.description = SOURCE_PACKAGE.description;
TARGET_PACKAGE.repository = SOURCE_PACKAGE.repository;
TARGET_PACKAGE.author = SOURCE_PACKAGE.author;
TARGET_PACKAGE.keywords = SOURCE_PACKAGE.keywords;
TARGET_PACKAGE.license = SOURCE_PACKAGE.license;
TARGET_PACKAGE.bugs = SOURCE_PACKAGE.bugs;
TARGET_PACKAGE.peerDependencies = SOURCE_PACKAGE.peerDependencies;

// workaround for https://github.com/ng-packagr/ng-packagr/issues/1159
TARGET_PACKAGE.optionalDependencies = TARGET_PACKAGE.dependencies;
TARGET_PACKAGE.dependencies = {};

fse.writeJsonSync(TARGET_PACKAGE_PATH, TARGET_PACKAGE);

let licenseBody = fse.readFileSync(path.resolve('./LICENSE'), { encoding: 'utf-8' });
licenseBody += `\nVersion: ${TARGET_PACKAGE.version} (built at ${new Date().toString()})`;
const licenseBanner = `/*!\n${licenseBody.replace(/^/gm, ' * ')}\n */\n`;
const minUMDWithLicense = `${licenseBanner}${fse.readFileSync(TARGET_UMD_MIN_JS_PATH, { encoding: 'utf-8' })}`;

fse.writeFileSync(TARGET_UMD_MIN_JS_PATH, minUMDWithLicense, { encoding: 'utf-8' });

const UMDWithLicense = `${licenseBanner}${fse.readFileSync(TARGET_UMD_JS_PATH, { encoding: 'utf-8' })}`;
fse.writeFileSync(TARGET_UMD_JS_PATH, UMDWithLicense, { encoding: 'utf-8' });
