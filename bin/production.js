var fs = require('fs');
var path = require('path');

try {
    fs.statSync(path.join(__dirname, '../dist'));
} catch (e) {
    console.log(e);
    console.log('please run `npm run build` fisrt!');
    process.exit(0);
}

process.env.NODE_ENV = 'production';

require('../dist');