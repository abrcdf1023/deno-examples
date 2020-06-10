import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async ctx => {
  const filepath = `${Deno.cwd()}/serving-frontend`
  await send(ctx, ctx.request.url.pathname, {
    root: filepath,
    index: "index.html"
  })
});

console.log("server started");
await app.listen({ port: 8000 });