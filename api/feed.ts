export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "none";

  return new Response(`Feed page with query: ${query}`, {
    headers: { "Content-Type": "text/plain" },
  });
}
