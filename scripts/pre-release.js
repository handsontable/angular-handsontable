const fse = require('fs-extra')
const path = require('path');

const PRO_PACKAGE_PATH = path.resolve('./dist/pro/package.json');
const PRO_UMD_MIN_JS_PATH = path.resolve('./dist/pro/bundles/handsontable-angular.umd.min.js');
const PRO_UMD_JS_PATH = path.resolve('./dist/pro/bundles/handsontable-angular.umd.js');

const SOURCE_PACKAGE = require(path.resolve('./package.json'));
const PRO_PACKAGE = fse.readJsonSync(PRO_PACKAGE_PATH, { encoding: 'utf-8' });

PRO_PACKAGE.version = SOURCE_PACKAGE.version;
PRO_PACKAGE.description = SOURCE_PACKAGE.description;
PRO_PACKAGE.repository = SOURCE_PACKAGE.repository;
PRO_PACKAGE.author = SOURCE_PACKAGE.author;
PRO_PACKAGE.keywords = SOURCE_PACKAGE.keywords;
PRO_PACKAGE.license = SOURCE_PACKAGE.license;
PRO_PACKAGE.bugs = SOURCE_PACKAGE.bugs;
PRO_PACKAGE.peerDependencies = SOURCE_PACKAGE.peerDependencies;

// workaround for https://github.com/ng-packagr/ng-packagr/issues/1159
PRO_PACKAGE.optionalDependencies = PRO_PACKAGE.dependencies;
PRO_PACKAGE.dependencies = {};

fse.writeJsonSync(PRO_PACKAGE_PATH, PRO_PACKAGE);

let licenseBody = fse.readFileSync(path.resolve('./LICENSE'), { encoding: 'utf-8' });
licenseBody += `\nVersion: ${PRO_PACKAGE.version} (built at ${new Date().toString()})`;
const licenseBanner = `/*!\n${licenseBody.replace(/^/gm, ' * ')}\n */\n`;
const minUMDWithLicense = `${licenseBanner}${fse.readFileSync(PRO_UMD_MIN_JS_PATH, { encoding: 'utf-8' })}`;

fse.writeFileSync(PRO_UMD_MIN_JS_PATH, minUMDWithLicense, { encoding: 'utf-8' });

const UMDWithLicense = `${licenseBanner}${fse.readFileSync(PRO_UMD_JS_PATH, { encoding: 'utf-8' })}`;
fse.writeFileSync(PRO_UMD_JS_PATH, UMDWithLicense, { encoding: 'utf-8' });
