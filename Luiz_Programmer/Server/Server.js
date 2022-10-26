const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {

  const adress = url.parse(req.url, true);

  if (adress.pathname != "/favicon.ico") {

    fs.readFile(".." + adress.pathname, (err, data) => {

      res.writeHeader(200, "Content-Type: [text/html, text/img]");
      res.write(data);
      res.end();
    });

  }

}).listen(8080);
