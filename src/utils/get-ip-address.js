const localIpAddress = require('local-ip-address');

// ToDo: Improve this to somehow get React port
console.log(`http://${localIpAddress()}:3000/`);
