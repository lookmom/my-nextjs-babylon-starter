// @ts-check

const withTM = require('next-transpile-modules')(['@babylonjs/core']); // pass the modules you would like to see transpiled

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {};

module.exports = withTM(nextConfig);
