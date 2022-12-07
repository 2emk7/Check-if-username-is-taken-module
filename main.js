const prompt = require('prompt-sync')();

const users = [
'admin',  //imagine this is a username taken already
'user1',  //imagine this is a username taken already
'user2',  //imagine this is a username taken already
'user3',  //imagine this is a username taken already
];

while (true) {
const username = prompt('Enter your desired username: ');

if (users.includes(username)) {
console.log('Username is already taken, please try again');
} else {
console.log('Username is available');
break;
}
}
