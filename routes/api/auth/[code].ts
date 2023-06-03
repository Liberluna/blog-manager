import { HandlerContext } from "$fresh/server.ts";

export const handler = async  (_req: Request, _ctx: HandlerContext): Promise<Response> => {
  const { pathname } = new URL(_req.url);
  const code = pathname.replace("/api/auth/","")
  
  const reqURL = `https://github.com/login/oauth/access_token?code=${code}&client_id=7ad00edcde8a0a74d3e6&client_secret=${Deno.env.get("client_secret")}`;
  const apiRes = await fetch(reqURL)
  const apiTxt = await apiRes.text()
  
  //const params = new URLSearchParams(apiTxt)
  
  return new Response(apiTxt);
};
