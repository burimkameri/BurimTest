const express = require('express')
const app = express()
const port = 3000

var execSh = require("exec-sh");


const exec = require('child_process');
//const testscript = exec.spawn('/home/ubuntu/change-app-id.sh');

app.get('/', (request, response) => {

  console.log("request:" + request.query.name)

  execSh("./change-app-id.sh SimonAppBlink.app 999", true, function(err, stdout, stderr){
    if(err){
      console.log("Exit code: ", err.code);
    }
      console.log("Output: ", stdout);

      response.send('Hello from Express!:'+stdout)
    
  });

})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})