import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async ctx => {
  const filepath = `${Deno.cwd()}/serving-frontend`
  // Use the --inspect-brk flag to break execution on the first line:
  // Open chrome://inspect and click Inspect next to target: Devices
  // debugger;
  await send(ctx, ctx.request.url.pathname, {
    root: filepath,
    index: "index.html"
  })
});

console.log("server started");
await app.listen({ port: 8000 });