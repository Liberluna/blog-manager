import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const { pathname } = new URL(_req.url);
  const code = pathname.replace("/api/auth/","")
  return new Response(code);
};
