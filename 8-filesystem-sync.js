const {
    readFileSync,
    writeFileSync
} = require(`fs`)

const first = readFileSync(`./content/first.txt`)
const second = readFileSync(`./content/second.txt`)

// ye ya to file create kr dega warna existing file main write krdega
writeFileSync(`./content/result-sync.txt`, `Here is the result: ${first},${second}`)
// flag file main append kary ga
writeFileSync(`./content/result-sync.txt`, `Here is the result: ${first},${second}`, {
    flag: 'a'
})

