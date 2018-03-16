const license = ['ce', 'pro'];
const files = ['README.md', 'LICENSE', 'CONTRIBUTING.md'];
const content = {};

let fs = require("fs"),
  path = require("path"),
  util = require("util");

let content;
console.log(content);
for (let file of files) {
  fs.readFile(path.join(__dirname, file), 'utf8', function(err, data) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    // debugger
    content[file] = data;
    console.log(data);
  });
}

var stream = fs.createWriteStream("CONTRIBUTING.md");
stream.once('open', function(fd) {
  stream.write("My first row");
  stream.write("My second row");
  stream.end();
});
