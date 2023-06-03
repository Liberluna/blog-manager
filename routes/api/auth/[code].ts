import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const { pathname } = new URL(_req.url);
  
  return new Response(pathname);
};
