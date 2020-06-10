import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import Page from './Page.tsx'

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello homepage!";
  })
  .get("/react", (context) => {
    context.response.body = Page({ message: "Foo", page: "react"})
  })

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.use((ctx) => {
  ctx.response.body = "Not found";
});

console.log("server started");
await app.listen({ port: 8000 });