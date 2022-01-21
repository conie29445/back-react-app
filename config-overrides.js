const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '.', dir);
}

const {
  override,
  disableEsLint,
  addBabelPlugin,
  addWebpackAlias,
} = require('customize-cra')

module.exports = override(
  //避開判定pug為未識別字元
  disableEsLint(),
  addBabelPlugin('transform-react-pug'),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
    ['~']: resolve('./src/assets'),
  })
)
