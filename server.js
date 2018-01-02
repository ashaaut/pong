let http = require("http");
let fs = require("fs");

let doesFileExist = function(fileName) {
  return fs.existsSync(fileName);
}

let requestHandler = function(request, response) {
  if (request.url == "/vollyBall") {
    response.write(fs.readFileSync("./ball.html", 'utf8'));
  }
  let fileName = request.url.replace('/', "");
  if (doesFileExist(fileName)) {
    response.write(fs.readFileSync(fileName));
  }
  response.end();
};
let server = http.createServer(requestHandler)
server.listen(9999);
