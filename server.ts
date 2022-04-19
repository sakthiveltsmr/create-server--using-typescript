import http, { IncomingMessage, ServerResponse, Server } from "http";

const port: number = 4000;

const server: Server = http.createServer(
  (reqest: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(`<h3>Wellcome</h3>`);
  }
);
server.listen(port, () => {
  console.log(`server runing @${port}`);
});
