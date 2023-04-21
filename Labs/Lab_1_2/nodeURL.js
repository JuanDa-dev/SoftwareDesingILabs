// app.js
const url = require('url');

const myUrl = 'https://www.youtube.com/watch?v=WNnFjvXm7oU';

const parsedUrl = url.parse(myUrl, true);

console.log(parsedUrl.hostname); // Output: example.com
console.log(parsedUrl.pathname); // Output: /path/to/resource
console.log(parsedUrl.query);    // Output: { param1: 'value1', param2: 'value2' }
