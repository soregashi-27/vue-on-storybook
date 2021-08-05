const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.scss/,
      use: ['style-loader', 'css-loader', 'sass-oader'],
      include: path.resolve(__dirname, '../')
    });
    return config;
  }
};
