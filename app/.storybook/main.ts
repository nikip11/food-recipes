const { mergeConfig } = require('vite');
const path = require('path');


module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-tailwind-dark-mode',
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    const newConfig = mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve("../src"),
        },
      },
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    })
    return newConfig
  },
}