const fs = require('fs');
const uglify = require('uglify-js');

const result = uglify.minify(fs.readFileSync('src/odometer.js', 'utf8'));

fs.writeFileSync('dist/odometer.min.js', result.code);