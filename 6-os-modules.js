const os = require('os')
const user = os.userInfo()

//user Info
console.log(user);

//method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime}`);


// system specifications
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);
