// app.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('hello', () => {
  console.log('Hello, world!');
});

myEmitter.emit('hello'); // Output: Hello, world!
