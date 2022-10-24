const path = require(`path`)
//shows file seprator
console.log(path.sep);

//joins all folder like path
const fullPath = path.join(`/content`, `subfolder`, 'test.txt')
console.log(fullPath);


//shows the last name of the path
const base = path.basename(fullPath)
console.log(base);

//absolute path--> full path of the path
const absolute = path.resolve(__dirname, `content`, `subfolder`, `test.txt`)
console.log(absolute);