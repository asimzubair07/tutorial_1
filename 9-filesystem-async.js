const {
    readFile,
    writeFile
} = require(`fs`)


// agr humain response k bd koi kam perform krna h to hum callback function use kraingy
// agr hum utf8 nae lagaen gy to humain --> <Buffer 54 68 69 73 20 69 73 20 66 69 72 73 74 20 66 69 6c 65>
//esy file read hogi 
//TODO utf8 laga k humary pas sahi se file read hogi

console.log("Starting");
readFile(`./content/first.txt`, "utf8", (err, result) => {
    if (err) {
        console.log("Errors occurs");
        return;
    }
    console.log(result);
    var first = result
    readFile(`./content/second.txt`, "utf8", (err, result) => {
        if (err) {
            console.log("Errors occurs");
            return;
        }
        console.log(result);
        const second = result
        writeFile(`./content/result-async.txt`, `Here is the result: ${first},${second}`, {
            flag: 'a'
        }, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
            console.log("Task Complete");
        })
    })
})
console.log("Starting new task");