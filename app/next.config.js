// @ts-check

const withTM = require('next-transpile-modules')(['@babylonjs/core', '@src/components']); // pass the modules you would like to see transpiled

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ['en'],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path e.g. `/hello`
     */
    defaultLocale: 'en',
  },
};

module.exports = withTM(nextConfig);
