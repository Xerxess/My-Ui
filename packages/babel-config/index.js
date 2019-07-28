
const env = require.resolve('@babel/preset-env');
const jsx = require.resolve('@babel/plugin-transform-react-jsx');
const runtime = require.resolve('@babel/plugin-transform-runtime');
const flow = require.resolve('@babel/plugin-transform-flow-strip-types');

const presets = [
  [env, {
    targets: {
      browsers: ['last 5 versions', 'ie >= 9'],
    },
    modules: false,
  }]
];
const plugins = [[
  runtime,
  {
    "absoluteRuntime": false,
    "corejs": 3,
    "helpers": true,
    "regenerator": true,
    "useESModules": true
  }
], ["@babel/plugin-transform-react-jsx", { "pragma": "h" }],[flow]]



module.exports = {
  presets,
  plugins
}