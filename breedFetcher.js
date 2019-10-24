const request = require('request');
const arg = process.argv;
request(`https://api.thecatapi.com/v1/breeds/search/?q=${arg[2]}`,(error, response, body) => {
  
  if (error) {
    console.log('error:', error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("No breed exists with given name");
  } else {
    
    console.log(data[0].description);
  }

});