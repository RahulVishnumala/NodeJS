const fs = require('fs')
const os = require('os')

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt','Good morning', (err)=> {
    if (err) throw err;
    console.log("The message has been appended to file!");
});

