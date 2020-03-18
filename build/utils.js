const path = require('path');
const fs = require('fs');
const transformPath = (url) => {
  return path.resolve(__dirname + '/../' + url);
};
const isExistFile = (path) => {
  return fs.existsSync(path) 
}
module.exports = {
  transformPath,
  isExistFile
};
