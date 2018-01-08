# Clean up previous distributions
rm -rf pro/dist
rm -rf pro/build

# Variables
NGC="node node_modules/.bin/ngc"
ROLLUP="node node_modules/.bin/rollup"

# Run Angular Compiler
$NGC -p pro/src/tsconfig-build.json
# Rollup simple-ui-lib.js
$ROLLUP pro/build/angular-handsontable.js -o pro/dist/angular-handsontable.js -f es

# Repeat the process for es5 version
$NGC -p pro/src/tsconfig-es5.json
$ROLLUP pro/build/angular-handsontable.js -o pro/dist/angular-handsontable.es5.js -f es

# Copy non-js files from build
rsync -a --exclude=*.js pro/build/ pro/dist

# Copy library package.json and README.md
cp pro/package.json pro/dist/package.json
# cp README.md dist/README.md