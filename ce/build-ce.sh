# Clean up previous distributions
rm -rf ce/dist
rm -rf ce/build

# Variables
NGC="node node_modules/.bin/ngc"
ROLLUP="node node_modules/.bin/rollup"

# Run Angular Compiler
$NGC -p ce/src/tsconfig-build.json
# Rollup simple-ui-lib.js
$ROLLUP ce/build/angular-handsontable.js -o ce/dist/angular-handsontable.js -f es

# Repeat the process for es5 version
$NGC -p ce/src/tsconfig-es5.json
$ROLLUP ce/build/angular-handsontable.js -o ce/dist/angular-handsontable.es5.js -f es

# Copy non-js files from build
rsync -a --exclude=*.js ce/build/ ce/dist

# Copy library package.json and README.md
cp ce/package.json ce/dist/package.json
# cp ../README.md dist/README.md