import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 3333 });

console.log("server started");

for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}

// async () => {
//   for await (const req of server) {
//     req.respond({ body: "Hello World\n" });
//   }
// }