const htpp = require("http");

htpp.createServer(router).listen(8080);

function router(req, res) {
  console.log("request");
  console.log(req.url);

  switch (req.url) {
    case "/hello":
      let response = hello();
      res.write(response);
      res.end();
      break;
    default:
      res.write("Error 404: Not found");
      res.end();
  }

/*   res.writeHead(201, { "Content-Type": "text/plain" });

  res.write("Hello World");
  res.end(); */
}

function response() {
  return "Hello World";
}

console.log("listening on port 8080");
