// This file isn't transpiled, requires CommonJs and ES5

require('babel-register')(); // register babel to run tests

require.extensions['.css'] = function() {}; // Disable webpack  features Mocha doesn't understand, treat css like an enpty function