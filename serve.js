import { exists } from "https://deno.land/std/fs/mod.ts";
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { serveDir, serveFile } from "https://deno.land/std@0.140.0/http/file_server.ts";

const fsRoot =  Deno.cwd();
serve(async (req) => {
  const pathname = new URL(req.url).pathname;
  if(pathname === '/' && (await exists(`${fsRoot}/index.html`))) {
    return await serveFile(req, `${fsRoot}/index.html`);
  }
  return await serveDir(req, { fsRoot });
});