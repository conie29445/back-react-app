const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '.', dir);
}

const {
  override,
  addWebpackAlias,
} = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '~': resolve('./src/assets'),
  }),
)
