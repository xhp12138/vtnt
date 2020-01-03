const path = require('path');
const transformPath = (url) => {
  return path.resolve(__dirname + '/../' + url);
};
module.exports = {
  transformPath
};
