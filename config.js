var config = {};
config.webhost = process.env.APPURL || 'http://localhost:3000/';
config.dbpath = process.env.DBPATH || 'mongodb://localhost:27017/test';
module.exports = config;