let greet = 'Hi';
console.log(greet);

// To pass the env var values execute the file like this:
// TEST_NAME="My Name" WEB_PAGE="My Page" node ./concepts/environment.js
let name = process.env.TEST_NAME || 'No Name';
let webpage = process.env.WEB_PAGE || 'IDK';
console.log(`Hi, ${name}`);
console.log(`Hi, ${webpage}`);


