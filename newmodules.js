const names = require('./names');
const sayHi = require('./utils')
const person = require('./alternativenames');
require('./mind-bomb');
console.log(names);
sayHi('Nathan');
sayHi(names.john);
sayHi(names.peter);