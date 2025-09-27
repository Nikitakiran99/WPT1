
// Asynchronous File Read

const f = require('fs')

f.writeFile('sample.txt','Hello File',(err) =>{ console.log(err);})


f.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log("error occured"+err);
    }else{
        console.log(data);
    }
});



// sync

// const fs = require('fs');

// console.log('1. Starting sync read...');
// const data = fs.readFileSync('myfile.txt', 'utf8');
// console.log('2. File contents:', data);
// console.log('3. Done reading file');

