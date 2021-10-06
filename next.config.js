const withTM = require('next-transpile-modules')(['@babylonjs/core']); // pass the modules you would like to see transpiled

module.exports = withTM();
