import http, { IncomingMessage, ServerResponse, Server } from "http";

const port: number = 4000;

const server: Server = http.createServer(
  (reqest: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    //routing

    let url: string | undefined = reqest.url;
    let method: string | undefined = reqest.method;
    var result: string = "";

    if (url === "/" && method === "GET") {
      result = "welcome to typescript server";
      response.end(result);
    } else if (url === "/about" && method === "GET") {
      result = "About Page";
      response.end(result);
    } else if (url === "/service" && method === "GET") {
      result = "Service Page";
      response.end(result);
    } else {
      result = "404 Page Not Found";
      response.end(result);
    }

    // response.end(`<h3>Wellcome</h3>`);
  }
);
server.listen(port, () => {
  console.log(`server runing @ http://localhost:${port}`);
});
