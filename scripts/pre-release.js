(function() {
  const fs = require('fs-extra')
  const path = require('path');

  const CE_PACKAGE_PATH = path.resolve('./dist/ce/package.json');
  const PRO_PACKAGE_PATH = path.resolve('./dist/pro/package.json');

  const SOURCE_PACKAGE = require(path.resolve('./package.json'));
  const CE_PACKAGE = require(CE_PACKAGE_PATH);
  const PRO_PACKAGE = require(PRO_PACKAGE_PATH);

  CE_PACKAGE.version = SOURCE_PACKAGE.version;
  PRO_PACKAGE.version = SOURCE_PACKAGE.version;

  fs.writeJsonSync(CE_PACKAGE_PATH, CE_PACKAGE);
  fs.writeJsonSync(PRO_PACKAGE_PATH, PRO_PACKAGE);

})();