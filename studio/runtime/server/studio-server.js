/* ==========================================================================
   STUDIO SERVER
   ZERO DEPENDENCY
   ========================================================================== */

import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const ROOT =
"/Users/artan/Documents/Neuroartan/control-center/studio";

const TOKEN_FILE =
"/Users/artan/Documents/Neuroartan/control-center/studio/registry/tokens/core-tokens.json";

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml"
};

function serveFile(response, filePath) {

  if (!fs.existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not Found");
    return;
  }

  const extension =
  path.extname(filePath);

  response.writeHead(200, {
    "Content-Type":
    MIME[extension] ||
    "text/plain"
  });

  response.end(
    fs.readFileSync(filePath)
  );
}

const server =
http.createServer(
  async (request, response) => {

    const parsed =
    url.parse(request.url, true);

    if (
      request.method === "POST" &&
      parsed.pathname === "/api/tokens"
    ) {

      let body = "";

      request.on("data", chunk => {
        body += chunk;
      });

      request.on("end", () => {

        fs.writeFileSync(
          TOKEN_FILE,
          JSON.stringify(
            JSON.parse(body),
            null,
            2
          )
        );

        response.writeHead(200, {
          "Content-Type":
          "application/json"
        });

        response.end(
          JSON.stringify({
            success: true
          })
        );
      });

      return;
    }

    let target =
    parsed.pathname === "/"
      ? "/index.html"
      : parsed.pathname;

    serveFile(
      response,
      path.join(ROOT, target)
    );
  }
);

server.listen(4173, () => {

  console.log(
    "[Studio] Sovereign runtime active on :4173"
  );
});
