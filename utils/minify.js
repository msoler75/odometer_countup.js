const fs = require('fs');
const uglify = require('uglify-js');

const result = uglify.minify(fs.readFileSync('dist/index.js', 'utf8'));

fs.writeFileSync('dist/index.min.js', result.code);