module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];
  // Add any other necessary Babel configuration here

  return {
    presets,
  };
};