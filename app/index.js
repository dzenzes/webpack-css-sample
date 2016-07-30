// nothing more needed: index.css will be added to build/app.css now
require('./index.css');

const functionFromAnotherModule = require('./another');

// should print 'Hello World';
console.log(functionFromAnotherModule());
