const p= require('path');
console.log("Name" + __dirName);


let config = p.join(__dirName, 'config',db.properties);

FileSystem.readFile(config)