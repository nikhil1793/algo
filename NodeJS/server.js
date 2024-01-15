const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === "/") {
      response.write(`
    <html>
       <head></head>
       <body>
           <form action="/message" method="POST">
              <input type="text" name="message"/>
              <button type="submit"> Click </button> 
           <form>
       </body>
    </html>
 `);
      return response.end();
    }

    if (url === "/message" && method === "POST") {
      const body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

    //   return request.on("end", () => {
    //     const parsedBody = Buffer.concat(body).toString();
    //     const message = parsedBody.split("=")[1];
    //     fs.writeFileSync("message.txt", message);
    //     response.statusCode = 302;
    //     response.setHeader("Location", "/");
    //     return response.end();
    //   });
    return request.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")[1];
        fs.writeFile("message.txt", message, (err) => {
            response.statusCode = 302;
            response.setHeader("Location", "/");
            return response.end();
        });
      });
    }

    response.write(`
      <html>
         <head></head>
         <body>
             <h1> Hello!!!!, Greet from Server </h1>
         </body>
      </html>
   `);

    response.end();
  })
  .listen(8000, () => {
    console.log("server is listening at 8000.....");
  });
